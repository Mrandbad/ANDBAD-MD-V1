export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return true
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `🍫 Rental period ended.`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}