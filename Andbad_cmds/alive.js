const { zokou } = require('../framework/zokou');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../bdd/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou(
    {
        nomCom : 'alive',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
*Owner* : ${s.OWNER_NAME}
*Mode* : ${mode}
*Date* : ${date}
*Hours(GMT)* : ${temps}

 ${message}
 
 
 *ANDBAD*`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
}

    } else {
        if(!superUser) { repondre("*𝚫𝚳 𝚫𝐋𝚰𝛁𝚵 𝚳𝚯𝚻𝚮𝚵𝚪 𝐅𝐔𝐂𝐊𝚵𝚪*") ; return};

      await   repondre("*☠️ 𝚫𝚴𝐃𝚩𝚫𝐃-𝚳𝐃-𝛁1* ~𝚰𝐒 𝚫𝐋𝚰𝛁𝚵 𝚫𝚻 𝚻𝚮𝚵 𝚳𝚯𝚳𝚳𝚵𝚴𝚻 𝐃𝚵𝚸𝐋𝚯𝐘 𝚰𝚻 𝚴𝚯𝐖 𝚫𝚴𝐃 𝚵𝚴𝐉𝚯𝐘~");
         repondre("don't do fake thinks :)")
     }
 } else {

    if(!superUser) { repondre ("𝐂.𝚵.𝚯 𝚫𝚴𝐃𝚩𝚫𝐃 ONLY") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre(' 𝗙𝗨𝗖𝗞 𝗬𝗢𝗨 𝗜𝗙 𝗬𝗢𝗨 𝗗𝗢𝗡𝗧 𝗙𝗢𝗥𝗞 𝗧𝗛𝗜𝗦 𝗕𝗢𝗧. ')

}
    });
