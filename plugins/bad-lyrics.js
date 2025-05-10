/* Lyrics By WillZek 
- Free Codes Titan 
- https://github.com/WillZek
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S 
*/

// [⌨️] Song Lyrics

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(m.chat, '🍭 Please enter the name of a song', m, rcanal);

try {
let api = `https://archive-ui.tanakadomp.biz.id/search/lirik?q=${text}`;

let response = await fetch(api);
let json = await response.json();
let crow = json.result;

let txt = `*Name:* ${crow.title}\n*Lyrics:* ${crow.lyrics}`;

let img = crow.thumb;

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (e) {
console.log(e)
m.reply('*Could not retrieve the lyrics of your song*');
m.reply('✖️');
 }
};

handler.help = ['lyrics'];
handler.tag = ['search'];
handler.command = ['lyrics'];

export default handler;