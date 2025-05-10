import { downloadContentFromMessage } from "@whiskeysockets/baileys"

// This function runs before processing a message.
export async function before(m, { isAdmin, isBotAdmin }) {
    let chat = db.data.chats[m.chat]
    // If the "antiver" feature is disabled or the chat is banned, exit the function.
    if (!chat.antiver || chat.isBanned) return

    // Check if the message is a "view once" type.
    if (m.mtype == 'viewOnceMessageV2' || m.mtype.hasOwnProperty("viewOnce")) {
        let msg = m.message.viewOnceMessageV2.message
        let type = Object.keys(msg)[0] // Get the type of the message (image or video).
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video') // Download the media content.
        
        let buffer = Buffer.from([]) // Initialize an empty buffer.
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]) // Concatenate chunks of the media into the buffer.
        }

        // If the media is a video, send it back with a warning message.
        if (/video/.test(type)) {
            return this.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption}` + 'Ey El Antiver Está Activo, No Ocultes Nada 🍫', m)
        } 
        // If the media is an image, send it back with a different warning message.
        else if (/image/.test(type)) {
            return this.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption}` + 'No Ocultes Nada ✅', m)
        }
    }
}

// Helper function to format file sizes into human-readable strings.
function formatFileSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'TY', 'EY']
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(100 * (bytes / Math.pow(1024, i))) / 100 + ' ' + sizes[i]
}