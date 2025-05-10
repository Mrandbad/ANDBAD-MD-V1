/*
《✧》ALL RIGHTS RESERVED BY THE AUTHOR《✧》
- GabrielVz (@glytglobal)
*/

import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🌸 Please write the name of the scraper.\nExample: ${usedPrefix + command} yt-search`, m, rcanal)

try {

await m.react(rwait)
conn.reply(m.chat, '🌸 Searching for the scraper....', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons, 
sourceUrl: channel }}})

let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()

if (!objects.length) return conn.reply(m.chat, `『✦』 No results found for: ${text}`, m, fake)

let txt = objects.map(({ package: pkg }) => {
return `《✧》 Scraper - Akari 《✧》

✦ Name: ${pkg.name}
✦ Version: V${pkg.version}
✦ Link: ${pkg.links.npm}
✦ Description: ${pkg.description}
\n\n----------`
}).join`\n\n`

await conn.reply(m.chat, txt, m, fake)
await m.react(done)
} catch {
await conn.reply(m.chat, '🌸 An error occurred', m, fake)
await m.react(error)
}}

handler.help = ['npmjs']
handler.tags = ['search']
handler.command = ['npmjs']
handler.register = false
handler.stars = 6;
export default handler