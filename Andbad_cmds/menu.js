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
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
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

    let infoMsg = `
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
╰────────────···▸▸ \n`;
    }

    menuMsg += `> 𝚳𝚫𝐃𝚵 𝚵𝚫𝐒𝐘 𝚩𝐘 𝚳𝚪 𝚫𝚴𝐃𝚩𝚫𝐃
`;

    var lien = mybotpic();

    // Define the Source URL
    const sourceUrl = "https://whatsapp.com/channel/0029VajQn6YF1YlPE0XgBC2m";

    const messageOptions = {
        caption: infoMsg + menuMsg,
        footer: "Je suis *𝚫 𝚴 𝐃 𝚩 𝚫 𝐃*, déveloper 𝚫 𝚴 𝐃 𝚩 𝚫 𝐃-𝚻 𝚵 𝐂 𝚮",
        contextInfo: {
            externalAdReply: {
                sourceUrl: sourceUrl,
                title: "View Channel",
                body: "Click to view the channel",
                thumbnail: { url: lien } // Optional: You can set a thumbnail if needed
            }
        }
    };

    if (lien.match(/\.(mp4|gif)$/i)) {
        try {
            zk.sendMessage(dest, {
                video: { url: lien },
                ...messageOptions,
                gifPlayback: true
            }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    } else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
        try {
            zk.sendMessage(dest, {
                image: { url: lien },
                ...messageOptions
            }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    } else {
        // Send a text message with the hidden Source URL
        try {
            zk.sendMessage(dest, {
                text: infoMsg + menuMsg,
                contextInfo: {
                    externalAdReply: {
                        sourceUrl: sourceUrl,
                        title: "View Channel",
                        body: "Click to view the channel"
                    }
                }
            }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    }
});