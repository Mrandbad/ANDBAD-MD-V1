const { zokou } = require("../framework/zokou");
const yts = require("yt-search");

// Command to search for a video on YouTube
zokou({
  nomCom: "video",
  categorie: "Search",
  reaction: '🤳'
}, async (message, client, args) => {
  const { ms, repondre, arg } = args;

  // Check if user provided a search term
  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let searchTerm = arg.join(" ");
    const searchResults = await yts(searchTerm);
    const videos = searchResults.videos;

    // If videos are found
    if (videos && videos.length > 0) {
      const firstVideo = videos[0];
      const messageContent = {
        image: {
          url: firstVideo.thumbnail
        },
        caption: "YOUTUBE SEARCH\n\n © 𝚳𝚪 𝚫𝚴𝐃𝚩𝚫𝐃"
      };

      // Send the thumbnail image
      await client.sendMessage(message, messageContent, { quoted: ms });

      // Send the video URL (assuming you have a valid download URL)
      await client.sendMessage(message, {
        video: {
          url: firstVideo.url // This should be the video URL or download URL
        },
        mimetype: "video/mp4"
      }, { quoted: ms });

      repondre("Downloaded Successfully✅");
    } else {
      repondre("No videos found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    repondre("Searching...😪");
  }
});

// Command to search for a song on YouTube
zokou({
  nomCom: "song",
  categorie: "Download",
  reaction: '🎺'
}, async (message, client, args) => {
  const { ms, repondre, arg } = args;

  // Check if user provided a search term
  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let searchTerm = arg.join(" ");
    const searchResults = await yts(searchTerm);
    const videos = searchResults.videos;

    // If videos are found
    if (videos && videos.length > 0) {
      const firstVideo = videos[0];
      const downloadUrl = "your_download_url"; // Replace with actual download URL logic

      const messageContent = {
        image: {
          url: firstVideo.thumbnail
        },
        caption: "YOUTUBE SEARCH\n\n ©𝚳𝚪 𝚫𝚴𝐃𝚩𝚫𝐃"
      };

      // Send the thumbnail image
      await client.sendMessage(message, messageContent, { quoted: ms });

      // Send the audio URL
      await client.sendMessage(message, {
        audio: {
          url: downloadUrl // This should be the audio download URL
        },
        mimetype: "audio/mp4"
      }, { quoted: ms });

      repondre("*Downloaded Successfully ✅*");
    } else {
      repondre("No audio found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    repondre("An error occurred while searching or downloading the audio.");
  }
});

// Command to play a song from YouTube
zokou({
  nomCom: "play",
  categorie: "Download",
  reaction: '🎤'
}, async (message, client, args) => {
  const { ms, repondre, arg } = args;

  // Check if user provided a search term
  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let searchTerm = arg.join(" ");
    const searchResults = await yts(searchTerm);
    const videos = searchResults.videos;

    // If videos are found
    if (videos && videos.length > 0) {
      const firstVideo = videos[0];
      const videoUrl = firstVideo.url; // The URL of the first video

      // Fetch the audio download URL from an external API
      const response = await fetch(`https://apis.ibrahimadams.us.kg/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=cracker`);
      const downloadData = await response.json();

      if (downloadData.status === 200 && downloadData.success) {
        const audioDownloadUrl = downloadData.result.download_url;

        const messageContent = {
          image: {
            url: firstVideo.thumbnail
          },
          caption: "YOUTUBE SEARCH\n\n ©𝚳𝚪 𝚫𝚴𝐃𝚩𝚫𝐃"
        };

        // Send the thumbnail image
        await client.sendMessage(message, messageContent , { quoted: ms });

        // Send the audio URL
        await client.sendMessage(message, {
          audio: {
            url: audioDownloadUrl
          },
          mimetype: "audio/mp4"
        }, { quoted: ms });

        repondre("*Downloaded Successfully ✅*");
      } else {
        repondre("Failed to download audio. Please try again later.");
      }
    } else {
      repondre("No audio found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    repondre("An error occurred while searching or downloading the audio.");
  }
});
