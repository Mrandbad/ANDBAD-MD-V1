const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";

    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }




    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
> 𝚫𝚴𝐃𝚩𝚫𝐃-𝚳𝐃 𝚫𝛁𝚫𝚰𝐋𝚫𝚩𝐋𝚵 𝚳𝚵𝚴𝐔𝐒 
╭─────────────────
│❒⁠⁠⁠⁠╭─────────────
│❒⁠⁠⁠⁠│▸ *𝚳𝚵𝚴𝐔* 
│❒⁠⁠⁠⁠│▸ *𝚳𝚵𝚴𝐔2* 
│❒⁠⁠⁠⁠│▸ *𝚩𝐔𝐆𝚳𝚵𝚴𝐔*
│❒⁠⁠⁠⁠╰──────────────
│❒⁠⁠⁠⁠│▸ *PLUGINS* : ${cm.length} 
│❒⁠⁠⁠⁠│▸ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠│▸ *SAVER* : ${os.platform()}
│❒⁠⁠⁠⁠│▸ *THEME* : *𝚫𝚴𝐃𝚩𝚫𝐃𝚻𝚮𝚵𝚳𝚵𝐒*
│❒⁠⁠⁠⁠╰──────────────
╰──────────────────\n`;

let menuMsg = `

 *COMMANDS*${readmore}
`;

    for (const cat in coms) {
        menuMsg += ` ╭────────❒⁠⁠⁠⁠ *${cat}* ✣`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│❒⁠⁠⁠⁠│▸ ${cmd}`;
        }
        menuMsg += `
╰────────────···▸▸ \n`
    }

    menuMsg += `> 𝚳𝚫𝐃𝚵 𝚵𝚫𝐒𝐘 𝚩𝐘 𝚳𝚪 𝚫𝚴𝐃𝚩𝚫𝐃
`;
    try {
        await zk.sendMessage(dest, {
            text: finalMessage,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
                externalAdReply: {
                    title: "ANDBAD MD WHATSAPP BOT",
                    body: "MADE BY MRANDBAD",
                    thumbnailUrl: "https://files.catbox.moe/028qf8.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VajQn6YF1YlPE0XgBC2m", // Added sourceUrl
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: ms }); // Added quoted option

        // Send an audio message (voice note)
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
                
