import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

// Function to handle welcome and goodbye messages in a group
export async function before(m, { conn, participants, groupMetadata }) {
  // If the message is not a stub type or not in a group, exit the function
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0] // Get the user ID
  let taguser = `@${who.split('@')[0]}` // Format the user tag
  let chat = global.db.data.chats[m.chat] // Access chat data from the database
  let defaultImage = 'https://lazackorganisation.my.id/mtaju.jpg'; // Default image URL

  if (chat.welcome) { // Check if the welcome feature is enabled
    let img;
    try {
      // Try to fetch the user's profile picture
      let pp = await conn.profilePictureUrl(who, 'image');
      img = await (await fetch(pp)).buffer();
    } catch {
      // Use the default image if fetching fails
      img = await (await fetch(defaultImage)).buffer();
    }

    const welcomeMessage = global.db.data.chats[m.chat]?.welcomeMessage || 'Welcome :';

    // Handle when a participant is added to the group
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `┏╼★${textbot}\n┋「 Welcome 」\n┗╼★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n ┋❖ ${welcomeMessage}\n ┋❀  ${groupMetadata.subject}\n ┗━━━━━━━━━━━━━━━┅ ⳹\n> ✐ You can use *#profile* to view your profile.`
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] }, { quoted: estilo })
    } 
    // Handle when a participant leaves or is removed from the group
    else if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
      const despMessage = global.db.data.chats[m.chat]?.despMessage || 'They left 😹';

      let bye = `┏╼★${textbot}\n┋「 GOODBYE 👋 」\n┗╼★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n ┋❖ ${despMessage}\n ┋❀ We never wanted you here\n ┗━━━━━━━━━━━━━━━┅ ⳹\n> ${dev}`
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] }, { quoted: estilo })
    }
  }

  return true // Return true to indicate successful execution
}