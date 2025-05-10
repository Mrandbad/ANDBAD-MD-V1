/* Github Search By WillZek 
- Free Codes Titan  
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

// [🔎] 𝗚𝗶𝘁𝗵𝘂𝗯 𝗦𝗲𝗮𝗿𝗰𝗵

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('《★》Enter a Repository Name or Github Username');

try {
let api = `https://dark-core-api.vercel.app/api/search/github?key=dk-vip&text=${text}`;

let response = await fetch(api);
let json = await response.json();
let result = json.results[0];

let txt = `*Name:* ${result.name}\n*Owner:* ${result.creator}\n*Stars:* ${result.stars}\n*Forks:* ${result.forks}\n*Description:* ${result.description}\n*Created:* ${result.createdAt}\n*Link:* ${result.cloneUrl}`;

let img = 'https://files.catbox.moe/9vlgt5.jpg';

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (error) {
console.error(error)
m.reply(`Error: ${error.message}`);
m.react('✖️');
 }
};

handler.tag = ['search'];
handler.help = ['githubsearch'];
handler.command = ['githubsearch', 'gbsearch'];

export default handler;