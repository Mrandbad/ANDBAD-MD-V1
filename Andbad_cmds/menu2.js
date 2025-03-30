const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }
    });


    

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
╭────《😃《𝗦𝗧𝗔𝗡𝗬-𝗧𝗘𝗖𝗛-𝗫𝗠𝗗》😃》────
┴  ╭─────────────
│❒⁠⁠⁠⁠│ *ADMIN* : ${s.OWNER_NAME}
│❒│⁠⁠⁠⁠ *CALENDER* : ${date}
│❒│⁠⁠⁠⁠ *PREFIX* : ${s.PREFIXE}
│❒⁠⁠⁠⁠│⁠⁠⁠ *BOT IS IN* : ${mode} mode
│❒│⁠⁠⁠⁠ *ORDERS* : ${cm.length} 
│❒│⁠⁠⁠⁠ *SPACE* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒│⁠⁠⁠⁠ *CHROME* : ${os.platform()}
│❒│⁠⁠⁠⁠ *THEME* : *𝚂𝚃𝙰𝙽𝚈-𝚃𝙴𝙲𝙷™*
┬  ╰──────────────
╰─── ··《✌️《𝗦𝗧𝗔𝗡𝗬-𝗧𝗘𝗖𝗛-𝗫𝗠𝗗》✌️》··──\n`;
    
let menuMsg = `
 ─────────
  *©𝚂𝚃𝙰𝙽𝚈-𝚃𝙴𝙲𝙷-𝚂𝚄𝙿𝙿𝙾𝚁𝚃* 
 ─────────


 *𝗦𝗧𝗔𝗡𝗬-𝗧𝗘𝗖𝗛-𝗫𝗠𝗗-𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*
`;

    for (const cat in coms) {
        menuMsg += ` ╭─⬡ *${cat}* ⬡─`;
        for (const cmd of coms[cat]) {
            menuMsg += `
⬡│▸ *${cmd}*`;
        }
        menuMsg += `
  ╰────────────·· \n`
    }

    menuMsg += `

|⏣𝗗𝗘𝗩𝗘𝗟𝗘𝗣𝗢𝗗 𝗕𝗬 ©𝚂𝚃𝙰𝙽𝚈-𝚃𝙴𝙲𝙷™ 𝗦𝗜𝗡𝗚𝗟𝗘 𝗕𝗢𝗬🥷
*❒⁠⁠⁠⁠—————————— ❒⁠⁠⁠⁠——————————❒⁠⁠⁠⁠*
`;

var lien = mybotpic();

if (lien.match(/\.(mp4|gif)$/i)) {
 try {
     zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *kavishanmd*, déveloper kavishan Tech" , gifPlayback : true }, { quoted: ms });
 }
 catch (e) {
     console.log("🥵🥵 Menu erreur " + e);
     repondre("🥵🥵 Menu erreur " + e);
 }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
 try {
     zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *kavishanmd*, déveloper kavishan Tech" }, { quoted: ms });
 }
 catch (e) {
     console.log("🥵🥵 Menu erreur " + e);
     repondre("🥵🥵 Menu erreur " + e);
 }
}
// Send a text message with the hidden Source URL
else {
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
        console.error("Error sending menu message:", e);
        repondre("🥵🥵 Menu erreur " + e.message);
    }
}
