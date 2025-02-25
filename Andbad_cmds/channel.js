const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "main", categorie: "All Groups" }, async (dest, zk, commandeOptions) => {
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
𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝚩𝐘 𝚫𝚴𝐃𝚩𝚫𝐃-𝚻𝚵𝚫𝚳🇹🇿 
╭─────────────────
│❒⁠⁠⁠⁠╭─────────────
│❒⁠⁠⁠⁠│▸ *𝐓𝐇𝐈𝐒 𝐀𝐑𝐄 𝐌𝐑 𝐀𝐍𝐃𝐁𝐀𝐃 𝐆𝐑𝐎𝐔𝐏 𝐋𝐈𝐍𝐊𝐒* 
│❒⁠⁠⁠⁠│▸ *CHANNELS* 
│❒⁠⁠⁠⁠│▸ *GROUPS*
│❒⁠⁠⁠⁠╰──────────────
│❒⁠⁠⁠⁠│▸ *CHANNEL* :  https://whatsapp.com/channel/0029VajQn6YF1YlPE0XgBC2m
│❒⁠⁠⁠⁠│▸ *CHANNEL* :  https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x
│❒⁠⁠⁠⁠│▸
│❒⁠⁠⁠⁠│▸ 1. https://chat.whatsapp.com/K9VJDBIwGLc8sWszcEOhjo
│❒⁠⁠⁠⁠│▸ 2. https://chat.whatsapp.com/LeXEFfLFyprAMI5rlBdfRj
│❒⁠⁠⁠⁠│▸ 3. https://chat.whatsapp.com/KQUhHDtpBxUKfhl94OlxEf
│❒⁠⁠⁠⁠│▸ 4. https://chat.whatsapp.com/Ilh736URrxrFUqp4qhRu7L
│❒⁠⁠⁠⁠│▸ 5. https://chat.whatsapp.com/DU79JfdnOI83ZFVAyD74Mo
│❒⁠⁠⁠⁠│▸ 6. https://chat.whatsapp.com/KX34mhuzDgYEU2vD2LAnty
│❒⁠⁠⁠⁠│▸ 7. https://chat.whatsapp.com/BfxM1Xk8aMV8kkps5NshND
│❒⁠⁠⁠⁠│▸ *MAKE SURE YOU HAVE JOINED THIS GROUPS*
│❒⁠⁠⁠⁠│▸ 
│❒⁠⁠⁠⁠╰──────────────
╰──────────────────\n
  `;
    
let menuMsg = `
 ☠️𝐌𝐀𝐃𝐄 𝐄𝐀𝐒𝐘 𝐛𝐲 𝐌𝐑 𝐀𝐍𝐃𝐁𝐀𝐃☠️

❒────────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
