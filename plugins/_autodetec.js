let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

export async function before(m, { conn, participants, groupMetadata }) {
    // If the message is not a stub type or not in a group, exit the function
    if (!m.messageStubType || !m.isGroup) return

    // Define a contact message template
    const fkontak = { 
        "key": { 
            "participants": "0@s.whatsapp.net", 
            "remoteJid": "status@broadcast", 
            "fromMe": false, 
            "id": "Halo" 
        }, 
        "message": { 
            "contactMessage": { 
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            }
        }, 
        "participant": "0@s.whatsapp.net"
    }

    // Retrieve chat data and sender information
    let chat = global.db.data.chats[m.chat]
    let usuario = `@${m.sender.split`@`[0]}`
    let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://files.catbox.moe/xr2m6u.jpg'

    // Define various messages for different group events
    let nombre = `《✧》${usuario} has changed the group name.\n\n> ✦ The group is now called:\n> *${m.messageStubParameters[0]}*.`
    let foto = `《✧》${usuario} has changed the group image.`
    let edit = `《✧》${usuario} has allowed ${m.messageStubParameters[0] == 'on' ? 'only admins' : 'everyone'} to configure the group.`
    let newlink = `《✧》The group link has been reset.\n\n> ✦ Action performed by:\n> » ${usuario}`
    let status = `《✧》The group has been ${m.messageStubParameters[0] == 'on' ? '*closed 🔒*' : '*opened 🔓*'} by ${usuario}\n\n> ✦ Now ${m.messageStubParameters[0] == 'on' ? '*only admins*' : '*everyone*'} can send messages.`
    let admingp = `《✧》@${m.messageStubParameters[0].split`@`[0]} is now an admin of the group.\n\n> ✦ Action performed by:\n> » ${usuario}`
    let noadmingp = `《✧》@${m.messageStubParameters[0].split`@`[0]} is no longer an admin of the group.\n\n> ✦ Action performed by:\n> » ${usuario}`
    let aceptar = `《✧》A new participant has joined the group.\n\n> ◦ ✐ Group: *${groupMetadata.subject}*\n\n> ◦ ⚘ Welcome: @${m.messageStubParameters[0].split('@')[0]}\n\n> ◦ ✦ Accepted by: @${m.sender.split('@')[0]}`

    // Handle different group events based on the message stub type
    if (chat.detect && m.messageStubType == 21) {
        await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })   
    } else if (chat.detect && m.messageStubType == 22) {
        await conn.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, { quoted: fkontak })
    } else if (chat.detect && m.messageStubType == 23) {
        await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })    
    } else if (chat.detect && m.messageStubType == 25) {
        await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })  
    } else if (chat.detect && m.messageStubType == 26) {
        await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })  
    } else if (chat.detect2 && m.messageStubType == 27) {
        await conn.sendMessage(m.chat, { text: aceptar, mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`] }, { quoted: fkontak })
    } else if (chat.detect && m.messageStubType == 29) {
        await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  
        return
    } if (chat.detect && m.messageStubType == 30) {
        await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  
    } else {
        // Uncomment the following lines for debugging purposes
        // console.log({ 
        //     messageStubType: m.messageStubType,
        //     messageStubParameters: m.messageStubParameters,
        //     type: WAMessageStubType[m.messageStubType], 
        // })
    }
}