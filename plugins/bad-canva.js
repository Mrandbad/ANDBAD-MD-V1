import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`《★》Enter the name of a movie\n> *Example: ${usedPrefix + command} Deadpool*`)

try {
let api = await fetch(`https://delirius-apiofc.vercel.app/search/cuevana?q=${encodeURIComponent(text)}`)
let json = await api.json()

let JT = `📽️ ${command}  -  Search 📽️`;
json.data.forEach((app, index) => {
      JT += `\n\n══════════════════════`;
      JT += `\n☁️ *No :* ${index + 1}`
      JT += `\n🖼️ *Image:* ${app.image}`
      JT += `\n⚜️ *Title:* ${app.title}`
      JT += `\n📚 *Description:* ${app.description}`
      JT += `\n🔗 *Link:* ${app.link}`
}) 

m.reply(JT)
} catch (error) {
console.error(error)
}}

handler.help = ['cuevana'];
handler.tag = ['search'];
handler.command = /^(cuevana|imdb|gnula)$/i

export default handler