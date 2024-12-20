// Importing required modules
const { zokou } = require('../framework/zokou'); // Custom module for bot commands
const yts = require('yt-search'); // Library for searching YouTube

// Command handler for searching and downloading YouTube videos
zokou({
    nomCom: 'search', // Command name
    categorie: 'Search', // Category of the command
    reaction: '🤳' // Reaction emoji
}, async (userId, botInstance, commandArgs) => {
    const { ms: messageId, repondre: reply, arg: args } = commandArgs;

    // Check if the user provided a song/video name
    if (!args[0]) {
        reply('Please insert a song/video name.');
        return;
    }

    try {
        // Join the command arguments to form the search query
        let searchQuery = args.join(' ');
        const searchResults = await yts(searchQuery); // Perform the YouTube search
        const videos = searchResults.videos; // Get the list of videos from the search results

        // Check if any videos were found
        if (videos && videos.length > 0) {
            const firstVideo = videos[0]; // Get the first video
            const responseMessage = {
                image: { url: firstVideo.thumbnail }, // Thumbnail of the video
                caption: 'Here is your video!' // Caption for the message
            };

            // Send the thumbnail and video to the user
            await botInstance.sendMessage(userId, responseMessage, { quoted: messageId });
            await botInstance.sendMessage(userId, {
                video: { url: firstVideo.url }, // Video URL
                mimetype: 'video/mp4' // MIME type for video
            }, { quoted: messageId });

            reply('Downloaded Successfully✅');
        } else {
            reply('No videos found.');
        }
    } catch (error) {
        console.error('Error from API:', error);
        reply('An error occurred while searching or downloading the audio.');
    }
});

// Command handler for downloading audio from YouTube
zokou({
    nomCom: 'song', // Command name
    categorie: 'Download', // Category of the command
    reaction: '🎺' // Reaction emoji
}, async (userId, botInstance, commandArgs) => {
    const { ms: messageId, repondre: reply, arg: args } = commandArgs;

    // Check if the user provided a song name
    if (!args[0]) {
        reply('Please insert a song name.');
        return;
    }

    try {
        let searchQuery = args.join(' '); // Join the command arguments
        const searchResults = await yts(searchQuery); // Perform the YouTube search
        const videos = searchResults.videos; // Get the list of videos

        // Check if any videos were found
        if (videos && videos.length > 0) {
            const firstVideo = videos[0]; // Get the first video
            const downloadUrl = 'your_download_url'; // Placeholder for download URL
            const responseMessage = {
                image: { url: firstVideo.thumbnail }, // Thumbnail of the video
                caption: 'Here is your audio!' // Caption for the message
            };

            // Send the thumbnail and audio to the user
            await botInstance.sendMessage(userId, responseMessage, { quoted: messageId });
            await botInstance.sendMessage(userId, {
                audio: { url: downloadUrl }, // Audio URL
                mimetype: 'audio/mp4' // MIME type for audio
            }, { quoted: messageId });

            reply('Downloaded Successfully✅');
        } else {
            reply('No audio found.');
        }
    } catch (error) {
        console.error('Error from API:', error);
        reply('An error occurred while searching or downloading the audio.');
    }
});

// Command handler for downloading audio directly
zokou({
    nomCom: 'download', // Command name
    categorie: 'Download', // Category of the command
    reaction: '🎤' // Reaction emoji
}, async (userId, botInstance, commandArgs) => {
    const { ms: messageId, repondre: reply, arg: args } = commandArgs;

    // Check if the user provided a song name
    if (!args[0]) {
        reply('Please insert a song name.');
        return;
    }

    try {
        let searchQuery = args.join(' '); // Join the command arguments
        const searchResults = await yts(searchQuery); // Perform the YouTube search
        const videos = searchResults.videos; // Get the list of
