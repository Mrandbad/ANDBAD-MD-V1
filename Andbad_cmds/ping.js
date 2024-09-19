"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'AM ALIVE STUPID.... GO GITHUB AND SEARCH ANDBA MD V1 FORK THE REPO DEPLOY AND DM FOR YOURE 15$';
    let d = '                                                                           I LOVE MY OWNER';
    let varmess = z + d;
    var img = 'https://i.imgur.com/L4U2K76.jpeg';
    await zk.sendMessage(dest, { video: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
