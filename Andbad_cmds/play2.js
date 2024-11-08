
const axios = require('axios');
const fs = require('fs');
const { zokou } = require("../framework/zokou");

const JAMENDO_API_KEY = '	9d0eede5'; // Replace with your Jamendo API key

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
    
    // Use Jamendo API to search for music
    const response = await axios.get(`https://api.jamendo.com/v3.0/tracks/?client_id=${JAMENDO_API_KEY}&name=${encodeURIComponent(topo)}&limit=1`);
    const tracks = response.data.results;

    if (tracks && tracks.length > 0) {
      const track = tracks[0];
      const audioUrl = track.download[0].url; // Get the download URL
      const trackName = track.name;
      const artistName = track.artist_name;

      let infoMess = {
        image: { url: track.image },
        caption: `*Song Name:* _${trackName}_\n*Artist:* _${artistName}_\n*Url:* _${audioUrl}_`
      };

      zk.sendMessage(origineMessage, infoMess, { quoted: ms });

      // Download the audio file
      const audioStream = (await axios.get(audioUrl, { responseType: 'stream' })).data;
      const filename = `${trackName}.mp3`; // Dynamic filename based on track name

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
