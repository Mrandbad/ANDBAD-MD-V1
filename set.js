const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "ANDBAD-BOT;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURHSjhRRmNncjIzMndoQWt5S01TQXl0Q2pQR2NYdGkrSHlrcU1tNmFXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjVESWVRQXRWZlFTYWlES0ExMUFvN2VRSFBPd2pzNUk3VUdhVEF3bUZqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUEhXY2UrYmFsN283aDJzNk1iYUYwVkdBN0RRTU9hZVlZNkYxL0ZoUFZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDY3hEUlM5b3pMN1JzMW1mbmZzVDFNalp6RnBvU3NOTFR3N3NzYmVIbEQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9OVzM3UkJNRWJIaDhkNFVVWUtDbFpTRlRRRlNXUjJSc0p6N01SV3pCRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRuMk53cmE4MVVZOHFQbXJEL0xPbDBvVld0RGUwT21QcVduNFlRS1FRM2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxmNk5tekV1NEtzOXNSOEk0UExDV3Z6dlpueHNnUjBIdEJJc05NbVlYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmc4SWhKTjBteW50ZS9NclZmV0ZTdGtFa2JIWnhkeU1SUFhqU0svR0xIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY2LzAvZ2ZqaEdDZDRaU2ppS1Y4aG56bGZaRENsNzF1NDdEYU1TVi85S0cwSTRrallvanlRY0lxZWN2a1NOZk9vdEhkNytWTUdDc01neHpUL1owL0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJUeWU4UTRVVmlFcDBIWVcyUDlJVVQrQlFoS3lVRXBXejJyK3JETVI2MGpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHanR3bWFERlRCdXBROWd1b2czMl9nIiwicGhvbmVJZCI6ImUzOTc2ODUxLTkwMmUtNDUxMC1iOTI3LTc5NWU0MTY1NWEyZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcUQ5ditxT3pHdE9zQ1FlRmxhb2crWG5tYmM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp0Z0tXelZhcmo2SHVQOUZhRjY4RGIrZTFXRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ051Q3plME9FTWoxdjc0R0dCUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNBdENDaU1CWjJjOGZ0MngrcTVINXN0cjhrY0ZjRUFSRWZqcEZhbnd0V2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjEzcm5ROWtXK05xYUJBTEFQenNubDBCdnczZDVnSzhCWmNEZ3FmY25pTUlsNHZHN2JWOUF1MWlQd3N6ZkJzaDgwMFd6dTJJZTlrcUpvS1pFa0dUMENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiYStlSmFpbHJuNVpIbGdFTGlsSlk3WU5NNVd5VVpyTFZDKzVtV0NBdk9pcTM5Sm1USnJQSzNiSnQvMXZPdHE0YlRQUkVoRy83bnhiMFBmT3lZcW9EZz09In0sIm1lIjp7ImlkIjoiMjM0OTEyMTg4MTM0Mzo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkN5cGhlciDDjGzDqXLDrW9sw7p3YSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTIxODgxMzQzOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEFMUWdvakFXZG5QSDdkc2ZxdVIrYkxhL0pIQlhCQUVSSDQ2UldwOExWbyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTY4MzQxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKQnIifQ==",
  'PREFIXE': process.env.PREFIX || ',',
  'OWNER_NAME': process.env.OWNER_NAME || "Cypher Ìléríolúwa(Ifálóṣèyífúnmi)",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "2349121881343",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "yes",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "yes",
  'BOT': process.env.BOT_NAME || "CYPHER-XBOT",
  'URL': process.env.BOT_MENU_LINKS || "https://i.imgur.com/L4U2K76.jpeg",
  'MODE': process.env.PUBLIC_MODE || 'no',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
