// By WillZek >> https://github.com/WillZek

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🍭 Enter a text to search for a WhatsApp group');

try {
let api = `https://api.agungny.my.id/api/searchgroup?q=${text}`;

let response = await fetch(api);
let json = await response.json();

m.react('🕑');
let txt = `🔎 \`WHATSAPP GROUP - SEARCH\`.`;
  for (let i = 0; i < (5 <= json.result.length ? 5 : json.result.length); i++) {
    let cb = json.result[i];
    txt += `\n\n`;
    txt += `💠 *Group Name:* ${cb.title}\n`
    txt += `💠 *Description:* ${cb.desc}\n`
    txt += `💠 *Link:* ${cb.link}`;
     }

m.react('🕒');
let img = json.result[0];

conn.sendMessage(m.chat, { image: { url: img.thumb }, caption: txt }, { quoted: m });
m.react('✅');

} catch (e) {
m.reply('💠 No WhatsApp group was found');
m.react('✖️');
 }
};

handler.help = ['searchgp'];
handler.tag = ['search'];
handler.command = ['gpwasearch', 'gpwas', 'searchgp', 'searchgroup'];

export default handler;