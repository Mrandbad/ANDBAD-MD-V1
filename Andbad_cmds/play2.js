const axios = require('axios');
const fs = require('fs');
const { zokou } = require("../framework/zokou");

zokou({
  nomCom: "play2",
  categorie: "Search",
  reaction: "🎧"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("wrong!!! Ie. _Play ZUCHU pwita._");
    return;
  }

  try {
    let topo = arg.join(" ");
    
    // Make sure to use the correct variable for the query
    const response = await axios.get(`https://itzpire.com/download/play-youtube?title=${topo}`);
    const tracks = response.data.results;

    if (tracks && tracks.length > 0) {
      const track = tracks[0];
      const audioUrl = track.download; // Assuming the API provides a download link

      let infoMess = {
        image: { url: track.image },
        caption: `*Song Name:* _${track.name}_\n*Artist:* _${track.artist}_\n*Url:* _${audioUrl}_`
      };

      zk.sendMessage(origineMessage, infoMess, { quoted: ms });

      // Download the audio file
      const audioStream = (await axios.get(audioUrl, { responseType: 'stream' })).data;
      const filename = `${track.name}.mp3`; // Dynamic filename based on track name

      const fileStream = fs.createWriteStream(filename);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Send the audio file
        zk.sendMessage(origineMessage, { audio: { url: filename }, mimetype: 'audio/mp4' }, { quoted: ms, ptt: false })
          .then(() => {
            // Delete the file after sending
            fs.unlinkSync(filename);
            console.log("Audio file sent and deleted!");
          })
          .catch(err => {
            console.error('Error sending audio file:', err);
            repondre('An error occurred while sending the audio file.');
          });
      });

      fileStream.on('error', (error) => {
        console.error('Error writing audio file:', error);
        repondre('An error occurred while writing the audio file.');
      });
    } else {
      repondre('No tracks found.');
    }
  } catch (error) {
    console.error('Error during search or download:', error);
    repondre('An error occurred during the search or download.');
  }
});
