let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let linkRegex1 = /whatsapp.com\/channel\/([0-9A-Za-z]{20,24})/i;

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, participants }) {
    if (!m.isGroup) return; // Exit if the message is not in a group
    if (isAdmin || isOwner || m.fromMe || isROwner) return; // Skip if the sender is an admin, owner, or the bot itself

    let chat = global.db.data.chats[m.chat];
    let delet = m.key.participant;
    let bang = m.key.id;
    const user = `@${m.sender.split`@`[0]}`;
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n');
    let bot = global.db.data.settings[this.user.jid] || {};
    const isGroupLink = linkRegex.exec(m.text) || linkRegex1.exec(m.text);
    const groupLink = `https://chat.whatsapp.com`;

    if (isAdmin && chat.antiLink && m.text.includes(groupLink)) {
        return m.reply(`🏷 *Hey!! Anti-link is active, but you're an admin, you're safe!*`);
    }

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            if (m.text.includes(linkThisGroup)) return true; // Allow if the link is for the current group
        }

        await conn.sendMessage(m.chat, { 
            text: `📎 *Link detected!*\n\n*${await this.getName(m.sender)} you sent a prohibited link, so you will be removed*`, 
            mentions: [m.sender] 
        }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });

        if (!isBotAdmin) {
            return conn.sendMessage(m.chat, { 
                text: `🌼 *I am not an admin, I cannot remove intruders*`, 
                mentions: [...groupAdmins.map(v => v.id)] 
            }, { quoted: m });
        }

        if (isBotAdmin) {
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
            let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            if (responseb[0].status === "404") return;
        }
    }
    return true;
}