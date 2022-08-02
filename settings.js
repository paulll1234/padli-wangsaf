const fs = require('fs')
const chalk = require('chalk')


global.thumb = fs.readFileSync('./media/imgnya.jpg')
global.thumb2 = fs.readFileSync('./media/imgnya2.jpg')
global.ownerNumber = ['6282243603393','6282243603393']
global.ownerName = 'padliiiiiiiu:3'
global.packname = 'pdlixyz'
global.lolkey = 'Atakbotz'
global.dapkey = 'Kirbotz123'
global.author = '©FxSx - pdlixyzਊ'
global.prefa = ['','!','#','&','/','.']
global.sessionName = 'sesi'
global.mess = {
       admin: '*Fitur Khusus Admin Grup*',
       botAdmin: '*Jadikan Bot Admin Terlebih Dahulu*',
       botOwner: '*Fitur Khusus Owner*',
       group: '*Fitur Khusus Group*',
       private: '*Fitur Khusus Private Chat*',
       wait: 'wait kidz...*',
       sukses: '*jadi nih kidz*',
       error: '*Error*'
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
