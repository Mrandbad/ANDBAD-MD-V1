const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || '   ANDBAD-BOT;;;/4bS14bac4bS04bSs4bS/4bSwKPCdkazwnZKO8J2ShvCdkpPwnZKK8J2SlfCdkpbwnZKUKeG2nOG1nuG0ruG0seG0vyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3YxcUljR0VOWDE3N3dHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTFAyaFF2eXJuUnpERTBORlRLTTlmZDJzSUxDaVFOU2NwYkRORWZ2aGxWWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSDZlZElUMXlXZm0vZXVzcTUxdTJVdFBsb0R0VHFBekhBU2JBYkZjck1IRW5RUm5pdExQSzdkT2ZjeFIzak1oaGQ0SDFIQVRrNGhFcll3SFUvbUY1QkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImcrV0pnUmpQaGpEVW55R1lUbmJkNjFXczVNQmQwNTVJc2N6MTZKTDhlcFdxNXo3NGNjM3JYMThyTkV3SGZic2dEVG4xS1VQMk84NXFsWHdSQ3M3NGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQ2NDI4ODM1OjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN6OW9VTDhxNTBjd3hORFJVeWpQWDNkckNDd29rRFVuS1d3elJINzRaVlcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzgyNzU1NTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3RyIn0= ',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "richard",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " richard",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'emeritus md ',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'typing',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
