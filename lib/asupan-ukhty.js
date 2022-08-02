let xcaa = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/ukhty'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
xcaa.help = ['asupan']
xcaa.tags = ['asupan']
xcaa.command = /^(ukhty)$/i

module.exports = xcaa
