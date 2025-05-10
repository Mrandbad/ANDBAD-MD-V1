import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

export function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    
    // If auto-level-up is not enabled in the chat, return
    if (!chat.autolevelup) return true

    let previousLevel = user.level * 1

    // Check if the user can level up and increment their level
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++

    // If the user's level has changed, send a notification
    if (previousLevel !== user.level) {
        conn.reply(
            m.chat, 
            `🚩 *YOU LEVELED UP*\n\n💛 *New Level:* ${user.level}\n✨️ *Previous Level:* ${previousLevel}\n🍭 *Rank:* ${user.role}\n🗓 *Date:* ${new Date().toLocaleString('id-ID')}`.trim(),
            m
        )
    }
}
