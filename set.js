const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || ' ANDBAD-BOT;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZ0VDl5dEVHeUNPWUJMTFNFVjRCVmp2UTByb0VuektpZTZMdzlkcERtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1phT21aU2ZrblM2dDY4Z3UyMlN0TzFzb3N2cW9WU0RtWmovQU5GWGJSND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QTNLWTUxWHVzTklZY05JMTRkcWwrMFZ5NlM5OU5kR3pNS0RRcFl5am44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNGw5bzRBRy9TTmZka2RYU3RaS1ZNR1JkVmhCbFBJNjI1OWd1ZFBnQTB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQenIwS3JaSTlvaUZMaSsxdmoxQm9RelY0QngwMG4yNUtwZXNQWWlUVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklZVnp0WHc4VHlKRnZ4RlJYMGFiODlSbXNNZkpWaEs4b3FVQ1hQTmhtUVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUUzTXRBNlJxNm1zcXpTc2N4SHJrNnRmMEcrNStaeHBSOXdqOWo4V3hWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3RYRjlDa0VnUjZmTGRDUzMwSWdXeHkyanlWYjUwUWQ2VHBZeHlyazVqZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5tOWFTbUVnSWx0Kzl3eW9BL0hod3ZYbWVMUHl5elNCbUoxU2RCaktkbHppR1FxMGp6ZjBVcXpJL3pXTlFjOWdMODhrUGFaM2I1cU1raDNwVko2dWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJUM3JnTi9WRE51Q1FUa0NrOHg4L0N4ZFdUQjRUSnJEMkpvMU9hZTJuSzc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMUWRpaUQ2dFRqdURsYU9fYjI4VWNRIiwicGhvbmVJZCI6ImUxZDc0OWQ0LTJmYmUtNGM5Ny1hODA5LTRmMmFmMGNhMDdmZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkQmxYOWZyOVQzZTdBQTdlNk95TmRjL2hVVEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem8xeWRVa3cxZ2xiSHRheFo4ODlnVzh5QTB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1HS0I3OTQ3IiwibWUiOnsiaWQiOiIyNTU3NDY0Mjg4MzU6MzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bS/4bS14bac4bS04bSs4bS/4bSwKPCdkazwnZKO8J2ShvCdkpPwnZKK8J2SlfCdkpbwnZKUKeG2nOG1nuG0ruG0seG0vyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3YxcUljR0VOWDE3N3dHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTFAyaFF2eXJuUnpERTBORlRLTTlmZDJzSUxDaVFOU2NwYkRORWZ2aGxWWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSDZlZElUMXlXZm0vZXVzcTUxdTJVdFBsb0R0VHFBekhBU2JBYkZjck1IRW5RUm5pdExQSzdkT2ZjeFIzak1oaGQ0SDFIQVRrNGhFcll3SFUvbUY1QkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImcrV0pnUmpQaGpEVW55R1lUbmJkNjFXczVNQmQwNTVJc2N6MTZKTDhlcFdxNXo3NGNjM3JYMThyTkV3SGZic2dEVG4xS1VQMk84NXFsWHdSQ3M3NGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQ2NDI4ODM1OjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN6OW9VTDhxNTBjd3hORFJVeWpQWDNkckNDd29rRFVuS1d3elJINzRaVlcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzgyNzU1NTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3RyIn0= ',
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
    ETAT : process.env.PRESENCE || '',
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
