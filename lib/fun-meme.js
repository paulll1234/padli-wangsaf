let fetch = require('node-fetch')
let xcaa = async (m, { conn }) => {
    let url = global.API('xteam', '/randomimage/meme', {}, 'APIKEY')
    await conn.sendButtonImg(m.chat, url, '*MEME*', wm, 'NEXT', '.meme',m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
xcaa.help = ['meme']
xcaa.tags = ['fun']
xcaa.command = /^(meme)$/i
xcaa.limit = false

module.exports = xcaa 
