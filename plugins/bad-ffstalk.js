import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `🍭 Enter the Free Fire user ID you want to stalk`, m)

try {
let api = await axios.get(`https://vapis.my.id/api/ff-stalk?id=${text}`)
let json = api.data
if (!json.status) return conn.reply(m.chat, "No results found", m)

  let { account, pet_info, guild, ketua_guild } = json.data
  let { id, name, level, xp, region, like, bio, create_time,  last_login, honor_score, booyah_pass, booyah_pass_badge, evo_access_badge,  equipped_title, BR_points, CS_points } = account

let { name: petName, level: petLevel, xp: petXP } = pet_info

let { name: guildName, level: guildLevel, member, capacity } = guild

let txt = `*[ USER INFO ]*
- *User:* ${name}
- *Level:* ${level}
- *XP:* ${xp}
- *Region:* ${region}
- *Likes:* ${like}
- *Bio:* ${bio || "Not available"}
- *Creation Date:* ${create_time}
- *Last Login:* ${last_login}
- *Honor Score:* ${honor_score}
- *Booyah Pass:* ${booyah_pass}
- *BR Points:* ${BR_points}
- *CS Points:* ${CS_points}

*[ PET INFO ]*
  - *Name:* ${petName}
  - *Level:* ${petLevel}
  - *XP:* ${petXP}

*[ CLAN INFO ]*
  - *Clan Name:* ${guildName}
  - *Clan Level:* ${guildLevel}
  - *Members:* ${member} / ${capacity} members
`

let { name: leaderName, level: leaderLevel, xp: leaderXP, BR_points: leaderBR, CS_points: leaderCS, like: leaderLike } = ketua_guild
txt += `*[ CLAN LEADER INFO ]*
  - *Name:* ${leaderName}
  - *Level:* ${leaderLevel}
  - *XP:* ${leaderXP}
  - *BR Points:* ${leaderBR}
  - *CS Points:* ${leaderCS}
  - *Likes:* ${leaderLike}
  - *Creation Date:* ${ketua_guild.create_time}
  - *Last Login:* ${ketua_guild.last_login}`

await conn.sendMessage(m.chat, { text: txt }, { quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = ['freefirestalk', 'ffstalk']

export default handler;
