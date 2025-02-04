const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage } = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = (s.MODE).toLowerCase() !== "yes" ? "private" : "public";

    cm.map((com) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
> 𝚫𝚴𝐃𝚩𝚫𝐃-𝚳𝐃 𝚫𝛁𝚫𝚰𝐋𝚫𝚩𝐋𝚵 𝚳𝚵𝚴𝐔𝐒 
╭─────────────────
│❒⁠⁠⁠⁠│▸ *PLUGINS* : ${cm.length} 
│❒⁠⁠⁠⁠│▸ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠│▸ *SAVER* : ${os.platform()}
│❒⁠⁠⁠⁠│▸ *THEME* : *𝚫𝚴𝐃𝚩𝚫𝐃𝚻𝚮𝚵𝚳𝚵𝐒*
╰──────────────────\n`;

    let menuMsg = `\n*COMMANDS*${readmore}\n`;
    for (const cat in coms) {
        menuMsg += ` ╭────────❒ *${cat}* ✣`;
        for (const cmd of coms[cat]) {
            menuMsg += `\n│❒⁠⁠⁠⁠│▸ ${cmd}`;
        }
        menuMsg += `\n╰────────────···▸▸ \n`;
    }
    menuMsg += `> 𝚳𝚫𝐃𝚵 𝚵𝚫𝐒𝐘 𝚩𝐘 𝚳𝚪 𝚫𝚴𝐃𝚩𝚫𝐃`;

    let finalMessage = infoMsg + menuMsg;

    try {
        // Sending the menu with externalAdReply
        await zk.sendMessage(dest, {
            text: finalMessage,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
                externalAdReply: {
                    title: "ANDBAD MD WHATSAPP BOT",
                    body: "MADE BY MRANDBAD",
                    thumbnailUrl: "https://files.catbox.moe/028qf8.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VajQn6YF1YlPE0XgBC2m",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: ms });

        // Sending an audio message (voice note)
        await zk.sendMessage(dest, {
            audio: { url: "https://github.com/Mrandbad/ANDBAD-MD-V1/raw/refs/heads/main/media/1001064756.mp3" },
            mimetype: "audio/mpeg",
            ptt: false,
        }, { quoted: ms });

    } catch (error) {
        console.error("Error sending menu:", error.message);
        repondre(`Error sending menu: ${error.message}`);
    }
});
