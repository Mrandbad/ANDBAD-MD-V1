export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isRowner, isMods}) {
  if (m.isBaileys && m.fromMe) return true; // Ignore messages sent by the bot itself
  if (m.isGroup) return false; // Ignore group messages
  if (!m.message) return true; // Ignore if there's no message content
  if (m.text.includes('ROCK') || m.text.includes('PAPER') || m.text.includes('SCISSORS') || m.text.includes('serbot') || m.text.includes('code') || m.text.includes('qr')) return true; // Allow specific keywords
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner && !isMods) {
    await m.reply(`> 《★》@${m.sender.split`@`[0]} It is prohibited to message the bot privately.\n> If you want to try our bot, follow the official channel: ${channel}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block'); // Block the user
  }
  return false;
  }