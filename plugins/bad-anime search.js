/* Code made by I'm Fz `
 - https/Github.com/FzTeis
*/

import axios from 'axios';
import cheerio from 'cheerio';

const searchAnime = async (query) => {
    const url = `https://tioanime.com/directorio?q=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        const results = [];

        $('ul.animes li').each((_, element) => {
            const name = $(element).find('h3.title').text().trim();
            const id = $(element).find('a').attr('href').split('/').pop();
            const image = $(element).find('img').attr('src');
            const animeUrl = `https://tioanime.com${$(element).find('a').attr('href')}`; 

            results.push({
                name,
                id,
                image: `https://tioanime.com${image}`,
                url: animeUrl, 
            });
        });

        return results;
    } catch (error) {
        console.error('Error searching for anime:', error.message);
        return { error: 'Could not retrieve results' };
    }
};

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
    if (!args[0]) {
        return conn.reply(m.chat, `《★》Please enter the name of an anime to search.`, m);
    }

    const results = await searchAnime(args[0]);
    if (results.length === 0) {
        return conn.reply(m.chat, `${emoji2} No results found.`, m);
    }

    const messages = [];
    for (const { name, id, url, image } of results) {
        messages.push([
            `Anime Information`,
            `Title: ${name}\n\n🔖 ID: ${id}\n*Use this ID to download the anime or select an option from the list.*`,
            image,
            [],
            [[`${url}`]],
            [],
            [{ title: `Select to get detailed anime information.`, rows: [
                { title: name, description: 'Click to get detailed information about the anime.', rowId: `${usedPrefix}animeinfo ${url}` }
            ]}]
        ]);
    }

    await conn.sendCarousel(m.chat, '', `\`\`\`《★》Hello! Below is the list of animes found.\`\`\``, "", messages, m);
}

handler.help = ['animesearch'];
handler.command = ['animesearch', 'animes'];
handler.tags = ['search'];
handler.premium = true;
handler.register = true;
handler.group = true;

export default handler;