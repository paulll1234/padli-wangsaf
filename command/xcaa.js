require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const maker = require('mumaker')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const yts = require('yt-search');

const tebaklagu = JSON.parse(fs.readFileSync('./lib/tebaklagu.json'))
const kuismath = JSON.parse(fs.readFileSync('./lib/math.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./lib/tebakgambar.json'))
const tebakkata = JSON.parse(fs.readFileSync('./lib/tebakkata.json'))
const caklontong = JSON.parse(fs.readFileSync('./lib/lontong.json'))
const caklontong_desk = JSON.parse(fs.readFileSync('./lib/lontong_desk.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./lib/kalimat.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./lib/lirik.json'))
const tebaktebakan = JSON.parse(fs.readFileSync('./lib/tebakan.json'))

//Waktu
const date = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

//Lib
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('../lib/myfunc')
const { idML } = require('../lib/stalkml')

//Module Exports
module.exports = xcaa = async(xcaa, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await xcaa.decodeJid(xcaa.user.id)
const isOwner = [xcaa.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == xcaa.user.id ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await xcaa.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)

const reply = (texto) => {
			xcaa.sendMessage(m.chat, { text: texto, mentions: [m.sender] }, {	quoted: m })
		}
		
//database
global.db = JSON.parse(fs.readFileSync('./storage/db.json'))
if (global.db) global.db = {
chats: {},
...(global.db || {})
}

try {
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
} else global.db.chats[m.chat] = {
antilink: false
}
} catch (err) {
console.error(err)
}

// Antilink
if (db.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`*Link Grup Lain Terdeteksi\n Awowkwowkwok gw kick lu sjg*`)
if (!isBotAdmins) return 
var gclink = (`https://chat.whatsapp.com/`+await xcaa.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyat`)
if (isAdmins) return m.reply(`Lu Bukan Admin😠😠😠😠`)
if (isOwner) return m.reply(`LU OWNER GW GBLK`)
xcaa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `╭「 *Anti ViewOnce* 」\n│ *Name* : ${pushname}\n│ *User* : @${m.sender.split("@")[0]}\n│ *Clock* : ${wib} WIB\n└ *Message* : ${m.mtype}`
     reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
		}
		 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, xcaa.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, xcaa.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, xcaa.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, xcaa.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, xcaa.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, xcaa.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, xcaa.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

if (!xcaa.public) {
if (!m.key.fromMe && !isOwner) return
}

//Push Message To Console
if (m.message) {
   xcaa.readMessages([m.key])
   console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

switch(command) {

case 'menu': case 'help': {
  let menunya = `╭「 *INFO BOT* 」
│ Name : RoF3X-Bot - pdlixyz 
│ Author : FxSx 
│ Library : Bailyes-MD
│ Language : JavaScript
│ Device : Android
│ Date : ${date}
│ Wib : ${wib}
│ Wita : ${wita}
└ Wit : ${wit}


${readmore}
╭「 *OTHER* 」
│ ${prefix}delete
│ ${prefix}owner
│ ${prefix}ping
│ ${prefix}listpc
│ ${prefix}listgc
└「 *OTHER* 」


╭「 *FUN MENU* 」
│ ${prefix}cekgay
│ ${prefix}wangy
│ ${prefix}bagaimana
│ ${prefix}cantikcek
│ ${prefix}cekganteng
│ ${prefix}ceklesbi
│ ${prefix}ceksange
│ ${prefix}rate
│ ${prefix}kapankah
│ ${prefix}apakah
│ ${prefix}bisakah
│ ${prefix}mlstalk
│ ${prefix}tebak
│ ${prefix}bucin
│ ${prefix}quotes
│ ${prefix}katabijak
│ ${prefix}faktaunik
│ ${prefix}pantun
└ 「 *FUN MENU* 」


╭「 *RANDOM* 」
│ ${prefix}yatim
│ ${prefix}jadian
│ ${prefix}meme
│ ${prefix}yatim
│ ${prefix}jodohku
│ ${prefix}pinterest
│ ${prefix}darkjokes
│ ${prefix}wikimedia
│ ${prefix}bebangc
│ ${prefix}quotesanime
└「 *RANDOM* 」


╭「 *MENU TAMBAHAN* 」
│ ${prefix}cry
│ ${prefix}kill
│ ${prefix}hug
│ ${prefix}pat
│ ${prefix}lick
│ ${prefix}kiss
│ ${prefix}bite
│ ${prefix}yeet
│ ${prefix}neko
│ ${prefix}bully
│ ${prefix}bink
│ ${prefix}wink
│ ${prefix}poke
│ ${prefix}nom
│ ${prefix}slap
│ ${prefix}waifu
│ ${prefix}smill
│ ${prefix}wafe
│ ${prefix}blush
│ ${prefix}awoo
│ ${prefix}smug
│ ${prefix}glomp
│ ${prefix}happy
│ ${prefix}dance
│ ${prefix}cringe
│ ${prefix}cuddle
│ ${prefix}handhold
│ ${prefix}megumin
│ ${prefix}highfive
│ ${prefix}shinobu


╭「 *WALLPAPER MENU* 」
│ ${prefix}wallpaper 
│ ${prefix}wallpaperislami
│ ${prefix}wallpaperinori
│ ${prefix}wallpapercyber
│ ${prefix}wallpaperteknologi
│ ${prefix}wallpaperanime
│ ${prefix}wallpapermeme
│ ${prefix}wallpaperprogamer
│ ${prefix}wallpapergame
└「 *WALLPAPER MENU* 」


╭「 *MENU ANIME* 」
│ ${prefix}ass
│ ${prefix}ero
│ ${prefix}bdsm
│ ${prefix}couple
│ ${prefix}yao
│ ${prefix}
│ ${prefix}hentai
│ ${prefix}orgy
│ ${prefix}yuri
│ ${prefix}pussy
│ ${prefix}panties
│ ${prefix}thighs
│ ${prefix}femdom
│ ${prefix}foot
│ ${prefix}trap
│ ${prefix}cum
│ ${prefix}jahy
│ ${prefix}ecchi
│ ${prefix}glasses
│ ${prefix}ahegao
│ ${prefix}cuckold
│ ${prefix}chiisaihentai
│ ${prefix}ahegao
│ ${prefix}gangbang
│ ${prefix}storyanime
│ ${prefix}hololewdime
│ ${prefix}sideoppai
│ ${prefix}animethighss
│ ${prefix}animefeets
│ ${prefix}animebooty
│ ${prefix}hentaiparadise
│ ${prefix}lewdanimegirls
│ ${prefix}animebellybutt
│ ${prefix}hentai4everyone
│ ${prefix}animebellybutton
│ ${prefix}biganimetiddies
└「 *MENU ANIME* 」

╭「 *DOWNLOAD* 」
│ ${prefix}play
│ ${prefix}yts
│ ${prefix}ytmp3
│ ${prefix}ytmp4
│ ${prefix}asupan[Error]
│ ${prefix}ttp
│ ${prefix}attp
│ ${prefix}nekopoi

╭「 *CUCI MATA* 」
│ ${prefix}asupanrikagusriani
│ ${prefix}asupanghea
│ ${prefix}asupanbocil
│ ${prefix}asupanukty
│ ${prefix}asupan2
│ ${prefix}cersex
│ ${prefix}bokep 
│ ${prefix}xnxxsearch
│ ${prefix}xnxxvideo
│ ${prefix}igstalk
│ ${prefix}tiktokstalk

╭「 *CONVERT* 」
│ ${prefix}sticker
│ ${prefix}stickerwm
│ ${prefix}smeme
│ ${prefix}emojimix
│ ${prefix}emojimix2
│ ${prefix}toimg
│ ${prefix}tovideo
│ ${prefix}toaudio
│ ${prefix}tomp3
│ ${prefix}tovn
│ ${prefix}togif
│ ${prefix}tourl
│ ${prefix}bass
│ ${prefix}blown
│ ${prefix}deep
│ ${prefix}earrape
│ ${prefix}fast
│ ${prefix}fat
│ ${prefix}nightcore
│ ${prefix}reverse
│ ${prefix}robot
│ ${prefix}slow
│ ${prefix}smooth
│ ${prefix}tupai
│ ${prefix}removebg
└ ${prefix}estetik

╭「 *MAKER* 」
│ ${prefix}ktpmaker
│ ${prefix}candy
│ ${prefix}christmas
│ ${prefix}3dchristmas
│ ${prefix}sparklechristmas
│ ${prefix}deepsea
│ ${prefix}scifi
│ ${prefix}rainbow
│ ${prefix}waterpipe
│ ${prefix}spooky
│ ${prefix}pencil
│ ${prefix}circuit
│ ${prefix}discovery
│ ${prefix}metalic
│ ${prefix}fiction
│ ${prefix}demon
│ ${prefix}transformer
│ ${prefix}berry
│ ${prefix}thunder
│ ${prefix}magma
│ ${prefix}3dstone
│ ${prefix}neonlight
│ ${prefix}glitch
│ ${prefix}harrypotter
│ ${prefix}brokenglass
│ ${prefix}papercut
│ ${prefix}watercolor
│ ${prefix}multicolor
│ ${prefix}neondevil
│ ${prefix}underwater
│ ${prefix}graffitibike
│ ${prefix}snow
│ ${prefix}cloud
│ ${prefix}honey
│ ${prefix}ice
│ ${prefix}fruitjuice
│ ${prefix}biscuit
│ ${prefix}wood
│ ${prefix}chocolate
│ ${prefix}strawberry
│ ${prefix}matrix
│ ${prefix}blood
│ ${prefix}dropwater
│ ${prefix}toxic
│ ${prefix}lava
│ ${prefix}rock
│ ${prefix}bloodglas
│ ${prefix}hallowen
│ ${prefix}darkgold
│ ${prefix}joker
│ ${prefix}wicker
│ ${prefix}firework
│ ${prefix}skeleton
│ ${prefix}blackpink
│ ${prefix}sand
│ ${prefix}glue
│ ${prefix}1917
└ ${prefix}leaves

────
┌──『 $Sound Menu$ 』
│  ${prefix}sound1
│  ${prefix}sound2
│  ${prefix}sound3
│  ${prefix}sound4
│  ${prefix}sound5
│  ${prefix}sound6
│  ${prefix}sound7
│  ${prefix}sound8
│  ${prefix}sound9
│  ${prefix}sound10
│  ${prefix}sound11
│  ${prefix}sound12
│  ${prefix}sound13
│  ${prefix}sound14
│  ${prefix}sound15
│  ${prefix}sound16
│  ${prefix}sound17
│  ${prefix}sound18
│  ${prefix}sound19
│  ${prefix}sound20
│  ${prefix}sound21
│  ${prefix}sound22
│  ${prefix}sound23
│  ${prefix}sound24
│  ${prefix}sound25
│  ${prefix}sound26
│  ${prefix}sound27
│  ${prefix}sound28
│  ${prefix}sound29
│  ${prefix}sound30
│  ${prefix}sound31
│  ${prefix}sound32
│  ${prefix}sound33
│  ${prefix}sound34
│  ${prefix}sound35
│  ${prefix}sound36
│  ${prefix}sound37
│  ${prefix}sound38
│  ${prefix}sound39
│  ${prefix}sound40
│  ${prefix}sound41
│  ${prefix}sound42
│  ${prefix}sound43
│  ${prefix}sound44
│  ${prefix}sound45
│  ${prefix}sound46
│  ${prefix}sound47
│  ${prefix}sound48
│  ${prefix}sound49
│  ${prefix}sound50
│  ${prefix}sound51
│  ${prefix}sound52
│  ${prefix}sound53
│  ${prefix}sound54
│  ${prefix}sound55
│  ${prefix}sound56
│  ${prefix}sound57
│  ${prefix}sound58
│  ${prefix}sound59
│  ${prefix}sound60
│  ${prefix}sound61
│  ${prefix}sound62
│  ${prefix}sound63
│  ${prefix}sound64
│  ${prefix}sound65
│  ${prefix}sound66
│  ${prefix}sound67
│  ${prefix}sound68
│  ${prefix}sound69
│  ${prefix}sound70
│  ${prefix}sound71
│  ${prefix}sound72
│  ${prefix}sound73
│  ${prefix}sound74
└──────

╭「 *GROUPS* 」
│ ${prefix}antilink
│ ${prefix}linkgroup
│ ${prefix}revoke
│ ${prefix}kick
│ ${prefix}add
│ ${prefix}promote
│ ${prefix}demote
│ ${prefix}setname
│ ${prefix}setdesk
│ ${prefix}setppgrup
│ ${prefix}tagall
│ ${prefix}hidetag
│ ${prefix}totag
└ ${prefix}ephemeral

╭「 *OWNER* 」
│ ${prefix}bc
│ ${prefix}bcgc
│ ${prefix}bcpvtchat
│ ${prefix}chat
│ ${prefix}join
│ ${prefix}culik
│ ${prefix}leave
│ ${prefix}block
│ ${prefix}unblock
│ ${prefix}setppbot
│ ${prefix}setexif
│ ${prefix}self
│ ${prefix}public
│ ${prefix}reaction
└ ${prefix}eval
`
  let buttons = [
      {buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner Bot'}, type: 1},
      {buttonId: `${prefix}ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
  ]
  let buttonMessage = {
      document: global.thumb,
      fileName: 'paulllllll:3',
      mimetype: 'application/pptx',
      fileLength: 99999999,
      jpegThumbnail: global.thumb,
      caption: `${menunya}`,
      footer: 'Bot Ini Masih Beta MD\nMohon Bantuannya, Jika Fitur Ada Yang Error Hubungi Owner\n\n',
      buttons: buttons,
      headerType: 4,
      contextInfo:{externalAdReply:{
      title: `Hai ${pushname}`,
      body: `${wib}`,
      thumbnail: global.thumb2,
      mediaType:1,
      mediaUrl: "https://wa.me/6282243603393",
      sourceUrl: "https://wa.me/6282243603393"
  }}
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
case 'infobot': case 'thankto': {
  let ingfo = `╭「 *INFO BOT* 」
│ Name : RoF3X-Bot - pdlixyz 
│ Author : FxSx
│ Library : Bailyes-MD
│ Language : JavaScript
└ Device : Android

╭「 *THANK TO* 」
│ Allah SWT
│ Ortu
│ FxSx <base>
│ FatihArridho
│ Fadli
│ NathanDev
│ Dika Ardnt 
└ Diva Uwu
`
  let btn = [{
     callButton: {
       displayText: 'Number Owner',
       phoneNumber: '+6282243603393'
     }
  }, {
     quickReplyButton: {
       displayText: 'Status Bot',
       id: 'ping'
     }
  }, {
     quickReplyButton: {
       displayText: 'Owner Bot',
       id: 'owner'
     }  
  }]
  xcaa.sendButton5Msg(m.chat, ingfo, global.ownerName, btn, m)
  }
  break
case 'owner': {
  xcaa.sendContact(m.chat, global.ownerNumber, m)
  }
  break
case 'listpc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
  let teks = `╭「 *LIST CHAT* 」\n└ Total Chat : ${anu.length}\n\n`
  for (let i of anu) {
  let nama = store.messages[i].array[0].pushName
      teks += `╭ *Nama :* ${nama}\n│ *User :* @${i.split('@')[0]}\n└ *Chat :* https://wa.me/${i.split('@')[0]}\n\n──────────────────\n\n`
  }
  xcaa.sendTextWithMentions(m.chat, teks, m)
  }
  break
case 'listgc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let teks = `╭「 *LIST GRUP* 」\n└ Total Group : ${anu.length} Group\n\n`
  for (let i of anu) {
  let metadata = await xcaa.groupMetadata(i)
      teks += `╭ *Nama :* ${metadata.subject}\n│ *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n│ *ID :* ${metadata.id}\n│ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n└ *Member :* ${metadata.participants.length}\n\n──────────────────\n\n`
  }
  xcaa.sendTextWithMentions(m.chat, teks, m)
  }
  break
case 'apakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
xcaa.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

					break
case 'bisakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
xcaa.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
xcaa.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : $` }, { quoted: m })

					break
case 'rate':
 
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
xcaa.sendMessage(m.chat, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
case 'gantengcek':
  case 'cekganteng':
   
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Namalu`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
xcaa.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })

					break
case 'cantikcek':
  case 'cekcantik':
   
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Namalu`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
xcaa.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Namalu`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
xcaa.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
case 'kapankah':
				if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
xcaa.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!q) return m.reply (`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
 case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                xcaa.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                xcaa.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
case 'hentai':
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':{

m.reply(mess.wait)
let cndn = await fetchJson(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)
let random = cndn[Math.floor(Math.random() * cndn.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':{

m.reply(mess.wait)
hasil = await getBuffer(`https://zenzapis.xyz/api/morensfw/blowjob?apikey=8dd8336cbd`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: xcaa.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By pdlixyz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/666-fadli'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282243603393'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':

inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
xcaa.sendMessage(m.chat, {audio: inicdd, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'tts':

m.reply('textnya mana')
inimmk = await fetchJson(`https://api.dapuhy.xyz/api/maker/tts?text=${q}&lang=id&apikey=${dapkey}`)
xcaa.sendMessage(m.chat, {audio: { url: inimmk.result }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'wallpaperislami':{

m.reply(mess.wait)
let kcle = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)
let random = kcle[Math.floor(Math.random() * kcle.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpaperinori':{

m.reply(mess.wait)
let kuxe = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
let random = kuxe[Math.floor(Math.random() * kuxe.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpapercyber':{

m.reply(mess.wait)
let xpwl = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
let random = xpwl[Math.floor(Math.random() * xpwl.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpaperteknologi':{

m.reply(mess.wait)
let toth = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
let random = toth[Math.floor(Math.random() * toth.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpaperanime':{

m.reply(mess.wait)
let tozs = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
let random = tozs[Math.floor(Math.random() * tozs.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'tebakgambar':{
m.reply(mess.wait)
cuu = fs.readFileSync('./lib/tebakgambar.js');
jsonData = JSON.parse(cuu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
                 asupanall = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ video: asupanall }, { upload: xcaa.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By pdlixyz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/666-fadli'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282243603393'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tebak': {

            	m.reply('tebak lagu,tebak lontong,tebak gambar, tebak kata, tebak kalimat,tebak lirik')
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await xcaa.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    xcaa.sendText(m.chat, `Judul Lagu Nya Apa??\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, xcaa.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    xcaa.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, xcaa.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    xcaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, xcaa.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    xcaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, xcaa.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    xcaa.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, xcaa.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    xcaa.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    xcaa.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, xcaa.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
case 'kuismath': case 'math': {

            	m.reply(mess.wait)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix+command} medium`
                let result = await genMath(text.toLowerCase())
                xcaa.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
case 'mlstalk': {
if (!q) return m.reply("Isi id|zoneid")
let dat = await idML(q.split("|")[0], q.split("|")[1])
m.reply(`Id : ${dat.userId}
Username : ${decodeURI(dat.username)}
ZoneId : ${dat.zoneId}
Country : ${dat.country}`)
}
break
case 'wallpapergamer':{

m.reply(mess.wait)
let toew = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
let random = toew[Math.floor(Math.random() * toew.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpaperprogamer':{

m.reply(mess.wait)
let xeke = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
let random = xeke[Math.floor(Math.random() * xeke.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpapermeme':{

m.reply(mess.wait)
let crkr = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
let random = crkr[Math.floor(Math.random() * crkr.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpaper':{

m.reply(mess.wait)
let crpe = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = crpe[Math.floor(Math.random() * crpe.length)]
xcaa.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick':
case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully':
case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap':
case 'waifu': case 'smile': case 'wave': case 'awoo': case 'blush':
case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe':
case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold': {
  m.reply(mess.wait)
  axios.get(`https://api.waifu.pics/sfw/${command}`)
  .then(({data}) => {
  xcaa.sendFile(m.chat, data.url, global.mess.sukses, m)
  })
  }
  break
case 'xnxxvideo':

if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    kohr = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    kohl = kohr.result
                    ini_txt = `Title : ${kohl.title}\n`
                    ini_txt += `Duration : ${kohl.duration}\n`
                    ini_txt += `View : ${kohl.view}\n`
                    ini_txt += `Rating : ${kohl.rating}\n`
                    ini_txt += `Like : ${kohl.like}\n`
                    ini_txt += `Dislike : ${kohl.dislike}\n`
                    ini_txt += `Comment : ${kohl.comment}\n`
                    ini_txt += `Tag : ${kohl.tag.join(", ")}\n`
                    ini_txt += `Description : ${kohl.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = kohl.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    fott = await getBuffer(kohl.thumbnail)
                    await xcaa.sendMessage(m.chat, { image: fott, caption: ini_txt }, { quoted: m})                  
                    break
case 'xnxxsearch':

                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Japanese`)
                    
                    query = args.join(" ")
                    koncol = await fetchJson(`https://zenzapis.xyz/searching/xnxx?apikey=8dd8336cbd&query=${query}`)
                    koncol = koncol.result
                    ini_txt = ""
                    for (var x of koncol) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xnxxvideo [link]`
xcaa.sendMessage(from, { text: anu }, { quoted: m })
break
case 'igstalk':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} namaig`)

igk = args.join(" ")
deshd = await fetchJson(`https://zenzapis.xyz/stalker/ig?username=${igk}&apikey=8dd8336cbd`)
deshxs = deshd.result
txt = `Link : https://www.instagram.com/${deshxs.username}\n`
txt += `Full : ${deshxs.fullname}\n`
txt += `Post : ${deshxs.posts}\n`
txt += `Followers : ${deshxs.followers}\n`
txt += `Following : ${deshxs.following}\n`
txt += `Bio : ${deshxs.bio}\n`
buffer = await getBuffer(deshxs.photo_profile)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: xcaa.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By pdlixyz ',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/pdlixyz '
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282243603393'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 
case 'tiktokstalk':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} namatt`)

ttk = args.join(" ")
csksyb = await fetchJson('https://zenzapis.xyz/stalker/tiktok?username=${ttk}&apikey=8dd8336cbd')
csksyl = csksyb.result
txt = `Username : ${csksyl.username}\n`
txt += `Nickname : ${csksyl.nickname}\n`
txt += `Bio : ${csksyl.bio}\n`
txt += `Followers : ${csksyl.followers}\n`
txt += `Following : ${csksyl.followings}\n`
txt += `Likes : ${csksyl.likes}\n`
txt += `Vidio : ${csksyl.video}\n`
buffer = await getBuffer(csksyl.user_picture)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: xcaa.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By dlixyz ',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/666-Fadli'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282243603393'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'nekopoi':{

              if (args.length == 0) return m.reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]

              geof = await fetchJson(`https://zenzapis.xyz/animeweb/nhentai?query=114512&apikey=8dd8336cbd`)
              skdl = geof.result
              ini_txt = `\`\`\`🐥 Title : ${skdl.anime}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Porducers : ${skdl.producers}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Duration : ${skdl.duration}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Size : ${skdl.size}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Sinopsis : ${skdl.sinopsis}\`\`\`\n`
              link = skdl.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              buff = await getBuffer(skdl.thumb)
let message = await prepareWAMessageMedia({ image: buff }, { upload: xcaa.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By Wz Botz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/Wz Botz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
         break
/*
case 'cersex':
kohg = await fetchJson('https://zenzapis.xyz/randomtext/cersex?apikey=8dd8336cbd')
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: kohg.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
*/


case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {

kohg = await fetchJson(`https://zenzapis.xyz/randomtext/bucinquote?apikey=8dd8336cbd`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: kohg.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotes':{

var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: teks,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'attp':
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
xcaa.sendMessage(m.chat, { sticker: gehdhe }, { quoted: m })
break
case 'asupan': case 'asupansantuy': case 'asupanbocil': case 'asupanukhty': case 'asupanghea': case 'asupanrikagusriani':{


hasiltod = await fetchJson(`https://zenzapis.xyz/randomasupan/asupantiktok?apikey=8dd8336cbd`)
hasiltt = await getBuffer(hasiltod.result)
let btn = [{
                                urlButton: {
                                    displayText: 'owner',
                                    id: `${owner}`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      xcaa.send5Vid(m.chat, `Nih Kak`, xcaa.user.name, hasiltt, btn)
                      }
                      break
case 'delete': case 'del': case 'd': {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
  xcaa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
️Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  }
  break
//Owner Menu
case 'bcgc': case 'bcgroup': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `*Contoh : ${prefix + command} Teks*`
  let getGroups = await xcaa.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  for (let i of anu) {
  await sleep(1500)
  const template = generateWAMessageFromContent(i, proto.Message.fromObject({ 
   templateMessage: { 
    hydratedTemplate: { 
     hydratedContentText: `「 *BROADCAST* 」\n\n${text}`, 
     locationMessage: {
     jpegThumbnail: global.thumb }, 
     hydratedFooterText: global.ownerName, 
     hydratedButtons: [{
     callButton: {
       displayText: 'Number Owner',
       phoneNumber: '+6283815956151'
     }
  }, {
     quickReplyButton: {
       displayText: 'Status Bot',
       id: 'ping'
     }
  }, {
     quickReplyButton: {
       displayText: 'Owner Bot',
       id: 'owner'
     }  
  }] } } }), { userJid: m.chat });
  xcaa.relayMessage(i, template.message, { messageId: template.key.id } )
  }
  m.reply(mess.sukses)
  }
  break
  case 'assalamualaikum': {
  m.reply(`_waalaikumsalam kak_ *${pushname}*\n *_Kalo Pengin Pake Bot Silahkan Ketik .menu_*`)
  }
  break 
  case 'kontol':
  case 'asu': 
  case 'anjing': 
  case 'bangsat': 
  case 'memek': 
  case 'kntl': 
  case 'babi': 
  case 'asw': 
  case 'anj': 
  case 'bngst': 
  case 'njir': 
  case 'anjir': {
  m.reply(`Jngn toxic😠😠!!\n *_Kalo Mau Pake Bot Silahkan ketik .menu_*`)
  }
  break 
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Contoh : ${prefix + command} Teks`
  let anu = await store.chats.all().map(v => v.id)
  let getGroups = await xcaa.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anuan = groups.map(v => v.id)
  for (let yoy of anu && anuan) {
  await sleep(1500)
  const template = generateWAMessageFromContent(yoy, proto.Message.fromObject({ 
   templateMessage: { 
    hydratedTemplate: { 
     hydratedContentText: `「 *BROADCAST* 」\n\n${text}`, 
     locationMessage: {
     jpegThumbnail: global.thumb }, 
     hydratedFooterText: global.ownerName, 
     hydratedButtons: [{
     callButton: {
       displayText: 'Number Owner',
       phoneNumber: '+6283815956151'
     }
  }, {
     quickReplyButton: {
       displayText: 'Status Bot',
       id: 'ping'
     }
  }, {
     quickReplyButton: {
       displayText: 'Owner Bot',
       id: 'owner'
     }  
  }] } } }), { userJid: m.chat });
  xcaa.relayMessage(yoy, template.message, { messageId: template.key.id } )
  }
  m.reply(mess.sukses)
  }
  break
case 'bchat': case 'bcpvtchat': case 'bcchat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Contoh : ${prefix + command} Teks`
  let anunuan = await store.chats.all().map(v => v.id)
  for (let yoi of anunuan) {
  await sleep(1500)
  const template = generateWAMessageFromContent(yoi, proto.Message.fromObject({ 
   templateMessage: { 
    hydratedTemplate: { 
     hydratedContentText: `「 *BROADCAST* 」\n\n${text}`, 
     locationMessage: {
     jpegThumbnail: global.thumb }, 
     hydratedFooterText: global.ownerName, 
     hydratedButtons: [{
     callButton: {
       displayText: 'Number Owner',
       phoneNumber: '+6283815956151'
     }
  }, {
     quickReplyButton: {
       displayText: 'Status Bot',
       id: 'ping'
     }
  }, {
     quickReplyButton: {
       displayText: 'Owner Bot',
       id: 'owner'
     }  
  }] } } }), { userJid: m.chat });
  xcaa.relayMessage(yoi, template.message, { messageId: template.key.id } )
  }
  m.reply(mess.sukses)
  }
  break
case 'chat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply('Contoh : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
  if (args[0] === 'mute') {
    xcaa.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unmute') {
    xcaa.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'archive') {
    xcaa.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unarchive') {
    xcaa.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'read') {
    xcaa.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unread') {
    xcaa.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'delete') {
    xcaa.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'join': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
  m.reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await xcaa.groupAcceptInvite(result).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(mess.error))
  }
  break
case 'culik': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let pantek = []
  for (let mem of participants) {
  pantek.push(mem.jid)
  }
  xcaa.groupParticipantsUpdate(args[0], pantek)
  }
  break
case 'leave': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  await xcaa.groupLeave(m.chat).then((res) => m.reply('Sampai Jumpa Kembali\nRoF3X-Bot Akan Segera Keluar\nKarna Disuruh Owner')).catch((err) => m.reply(mess.error))
  }
  break
case 'block': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.updateBlockStatus(users, 'block').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(mess.error))
  }
  break
case 'unblock': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(mess.error))
  }
  break
case 'setppbot': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!quoted) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  await xcaa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.sukses)
  }
  break
case 'setexif': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Contoh : ${prefix + command} packname|author`
  global.packname = text.split("|")[0]
  global.author = text.split("|")[1]
  m.reply(`╭ Packname : ${global.packname}\n└ Author : ${global.author}`)
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  xcaa.public = true
  m.reply(mess.sukses)
  }
  case 'asupan2':{

m.reply(mess.wait)
hasiltod = await fetchJson(`https://zenzapis.xyz/randomasupan/asupan?apikey=8dd8336cbd`)
xcaa.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `asupan.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'ghea':{

m.reply(mess.wait)
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ghea?apikey=SpyBotApi`)
xcaa.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'ukhty':{

m.reply(mess.wait)
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ukty?apikey=SpyBotApi`)
xcaa.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'rikagusriani':{

m.reply(mess.wait)
hasifs = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/rikagusriani?apikey=SpyBotApi`)
xcaa.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'santuy':{

m.reply(mess.wait)
hasifs = await fetchJson(`https://raku-web.herokuapp.com/api/asupan/santuy?apikey=RakuKeyTod`)
xcaa.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'meme':{

m.reply(mess.wait)
nyaa = fs.readFileSync('./lib/meme.js');
                 jsonData = JSON.parse(nyaa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: memeall }, { upload: xcaa.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By pdlixyz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/666-fadli'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282243603393'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
case 'asupan':{
m.reply(mess.wait)
cuu = fs.readFileSync('./lib/asupan.js');
jsonData = JSON.parse(cuu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
                 asupanall = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ video: asupanall }, { upload: xcaa.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By pdlixyz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/666-fadli'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282243603393'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'darkjokes':{

m.reply(mess.wait)
nyenye = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(nyenye);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: hasil }, { upload: xcaa.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By pdlixyz ',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/pdlixyz '
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282243603393'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'bocil':{

m.reply(mess.wait)
hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/bocil?apikey=SpyBotApi`)
xcaa.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'bokep':{

m.reply(mess.wait)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
xcaa.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break
case 'storyanime':{


hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
xcaa.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `storyanime.mp4`, caption: `Nih Story Animenya` }, { quoted: m })
}
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  xcaa.self = false
  m.reply(mess.sukses)
  }
  break
case 'react': case 'reaction': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  reactionMessage = {
    react: {
      text: args[0],
      key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
  }
  xcaa.sendMessage(m.chat, reactionMessage)
  }
  break  
case 'eval': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break
//Group Menu
case 'antilink':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antilink = true
  m.reply(mess.sukses)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antilink = false
  m.reply(mess.sukses)
  } else {
  let buttonsantilink = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${prefix + command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttonsantilink, `Mode ${command}️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${prefix + command} on/off`, m)
  }
  break
case 'linkgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await xcaa.groupInviteCode(m.chat)
  xcaa.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await xcaa.groupRevokeInvite(from)
  m.reply(mess.sukses)
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di kick siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di add siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di promote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di demote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setname': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply(`Contoh : ${prefix + command} Teks`)
  await xcaa.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply(`Contoh : ${prefix + command} Teks`)
  await xcaa.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  await xcaa.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.sukses)
  }
  break
case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  let teks = `╭ *Tag All*\n└ *Pesan : ${q ? q : 'Kosong'}*\n\n`
  for (let mem of participants) {
  teks += `•> @${mem.id.split('@')[0]}\n`
  }
  xcaa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  xcaa.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
  }
  break
case 'totag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
  xcaa.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukan Value enable/disable')
  if (args[0] === 'enable') {
  await xcaa.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await xcaa.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'group': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukan Value open/close')
  if (args[0] === 'close'){
  await xcaa.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await xcaa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${prefix + command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${prefix + command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttonsgroup, `Mode Buka/Tutup Grup️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukan Value open/close')
  if (args[0] === 'open'){
  await xcaa.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await xcaa.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${prefix + command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${prefix + command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttons, `Mode Edit Info Grup`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
//Converter Menu
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
  if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await xcaa.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await xcaa.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  }
  break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'stikerwm': {
  if (!quoted) throw m.reply(`Balas Video/Image Dengan Caption ${prefix + command} Teks|Teks`)
  let [teks1, teks2] = text.split`|`
  if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
  if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
  m.reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await xcaa.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await xcaa.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
  await fs.unlinkSync(encmedia)
  } else {
    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  }
  break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
  if (!/image/.test(mime)) throw m.reply(`Kirim/reply Image/sticker Dengan Caption ${prefix + command} Teks|Teks`)
  if (!text) throw `Kirim/reply Image/sticker Dengan Caption ${prefix + command} Teks|Teks`
	m.reply(mess.wait)
  atas = text.split('|')[0] ? text.split('|')[0] : '-'
  bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	let dwnld = await quoted.download()
	let { floNime } = require('./lib/uploader')
	let inni = await floNime(dwnld)
	let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${inni.result.url}`
	let encmedia = await xcaa.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	await fs.unlinkSync(encmedia)
  }
	break     
case 'emojimix': {
	if (!text) throw `Example : ${prefix + command} 😅+😊`
	let [emoji1, emoji2] = text.split`+`
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anu.results) {
  let encmedia = await xcaa.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
	await fs.unlinkSync(encmedia)
	}
	}
  break 
case 'emojimix2': {
  if (!text) return m.reply(`Contoh : ${prefix + command} 😅`)
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
	for (let res of anu.results) {
  let encmedia = await xcaa.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
  await fs.unlinkSync(encmedia)
	}
  }
  break
case 'imagenobg': case 'removebg': case 'remove-bg': {
	if (!quoted) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (/webp/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	let remobg = require('remove.bg')
	let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	hmm = await './src/remobg-' + getRandom('')
	localFile = await xcaa.downloadAndSaveMediaMessage(quoted, hmm)
	console.log(localFile)
	outputFile = await './src/hremo-' + getRandom('.png')
	m.reply(mess.wait)
	try {
	remobg.removeBackgroundFromImageFile({
	path: localFile,
	apiKey: apinobg,
	size: "regular",
	type: "auto",
	scale: "100%",
	outputFile
	}).then(async (result) => {
	console.log(`File saved to ${outputFile}`);
	await xcaa.sendMessage(m.chat, {
	image: fs.readFileSync(outputFile),
	caption: '*Sukses*'
	}, {
	quoted: m
	})
	const base64img = result.base64img;
	await sleep(7000)
	await fs.unlinkSync(localFile)
	await fs.unlinkSync(outputFile)
	}).catch((errors) => {
	console.log(JSON.stringify(errors));
	});
	} catch (err) {
	m.reply(util.format(err))
	await fs.unlinkSync(localFile)
	}
  }
  break
case 'estetik': {
	if (!quoted) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (!/image/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (/webp/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	let remobg = require('remove.bg')
  let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
  hmm = await './src/remobg-' + getRandom('')
	localFile = await xcaa.downloadAndSaveMediaMessage(quoted, hmm)
	outputFile = './src/hremo-' + getRandom('.png')
	m.reply(mess.wait)
	try {
	remobg.removeBackgroundFromImageFile({
	path: localFile,
	apiKey: apinobg,
	size: "regular",
	type: "auto",
	scale: "100%",
	outputFile
	}).then(async result => {
	console.log(outputFile)
	let tes = await fs.readFileSync(outputFile)
	let anu = await TelegraPh(outputFile)
	console.log(anu)
	let hsil = await getBuffer(`https://oni-chan.my.id/api/Fmake/estetik?picturl=${anu}`)
	await sleep(9000)
	await xcaa.sendMessage(m.chat, {image: hsil,caption: '*Sukses*'}, {quoted: m})
	await sleep(15000)
	await fs.unlinkSync(localFile)
	await fs.unlinkSync(outputFile)
	})
  } catch (err) {
	m.reply(util.format(err))
	await fs.unlinkSync(localFile)
	}
	}
	break
case 'asupan': {
let anu = getBuffer('https://api.zacros.my.id/asupan/ukhty')
xcaa.sendMessage(m.chat,{ video: anu, caption: 'Nih'}, { quoted: m })
}
break
case 'toimage': case 'toimg': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  xcaa.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `Balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await xcaa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  xcaa.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mp4'}, { quoted : m })
  }
  break
case 'tomp3': {
  if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  xcaa.sendMessage(m.chat, {document: audio, mimetype: 'audio/mp4', fileName: `Convert By ${xcaa.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  xcaa.sendMessage(m.chat, {audio: audio, mimetype:'audio/mp4', ptt:true }, {quoted: m})
  }
  break
case 'togif': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `Balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await xcaa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
  try {
  let set
  if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
  if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
  if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
  if (/earrape/.test(command)) set = '-af volume=12'
  if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
  if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
  if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
  if (/reverse/.test(command)) set = '-filter_complex "areverse"'
  if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
  if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
  if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
  if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
  if (/audio/.test(mime)) {
  m.reply(mess.wait)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(err)
  let buff = fs.readFileSync(ran)
  xcaa.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
  fs.unlinkSync(ran)
  })
  } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
  } catch (e) {
  m.reply(e)
  }
  break
//Maker Menu
case 'ktpmaker': {
  if (args.length == 0) return m.reply(`*Contoh :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar`)
	get_args = args.join(" ").split("|")
	nik = get_args[0]
	if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
	prov = get_args[1]
  if (!prov) return m.reply('probinsi mana kak')
  kabu = get_args[2]
  if (!kabu) return m.reply('kabupaten mana kak')
	name = get_args[3]
  if (!name) return m.reply('nama nya siapa kak')
  ttl = get_args[4]
  if (!ttl) return m.reply('tempat tanggal lahir nya kak')
  jk = get_args[5]
  if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
  jl = get_args[6]
  if (!jl) return m.reply('alamat rumah nya mana kak')
  rtrw = get_args[7]
  if (!rtrw) return m.reply('RT / RW berapa kak')
  lurah = get_args[8]
  if (!lurah) return m.reply('kelurahan mana kak')
  camat = get_args[9]
  if (!camat) return m.reply('kecamatan mana kak')
  agama = get_args[10]
  if (!agama) return m.reply('agama nya apa kak')
  nikah = get_args[11]
  if (!nikah) return m.reply('status belum ada')
  kerja = get_args[12]
  if (!kerja) return m.reply('pekerjaan belum ada')
  warga = get_args[13]
  if (!warga) return m.reply('region belum ada')
  until = get_args[14]
  if (!until) return m.reply('waktu berlaku belum ada')
  gd = get_args[15]
  if (!gd) return m.reply('golongan darah belum ada')
  img = get_args[16]
  if (!img) return m.reply('url image belum ada')
  m.reply(mess.wait)
  bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
  console.log(bikin)
  ardaktp = await getBuffer(bikin)
  await sleep(8000)
  await xcaa.sendMessage(from, { image: ardaktp, caption: global.mess.sukses }, { quoted: m })
	}
	break;
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
  if (!text) return m.reply(`Contoh : ${prefix + command} Teks`) 
  m.reply(mess.wait)
  let link
  if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
  if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
  if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
  if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
  if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
  if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
  if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
  if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
  if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
  if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
  if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
  if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
  if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
  if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
  if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
  if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
  if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
  if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
  if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
  if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
  if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
  if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
  if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
  if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
  if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
  if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
  if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
  if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
  if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
  if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
  if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
  if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
  if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
  if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
  if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
  if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
  if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
  if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
  if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
  if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
  if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
  if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
  if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
  if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
  if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
  if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
  if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
  if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
  if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
  if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
  if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
  if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
  if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
  if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
  if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
  if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
  if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
  let anu = await maker.textpro(link, text)
  xcaa.sendMessage(m.chat, { image: { url: anu }, caption: global.mess.sukses }, { quoted: m })
  }
  break
//Random Menu
case 'jodohku': {
  if (!m.isGroup) return m.reply(mess.group)
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let jawab = `Jodoh Mu Adalah\n\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n\nGaskeun Pepet Ae Ngap`
  let ments = [me, jodoh]
  let buttons = [
     {buttonId: 'jodohku', buttonText: {displayText: 'Jodohku' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: ments})
  }
  break
case 'jadian': {
  if (!m.isGroup) return m.reply(mess.group)
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let jawab = `Ehem Ada Yang Jadian Nih\n\n@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n\nBisa Kali Dapet Pajaknya`
  let menst = [orang, jodoh]
  let buttons = [
     {buttonId: 'jadian', buttonText: {displayText: 'Jodohku' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: menst})
  }
  break
case 'beban': case 'bebangc': case 'bbngc': case 'bbn': {
  if (!m.isGroup) return m.reply(mess.group)
  let member = participants.map(u => u.id)
  let bn = member[Math.floor(Math.random() * member.length)]
  let jawab = `Mau Lihat Beban Group?${readmore}\n\n@${beban.split('@')[0]}`
  let buttons = [
     {buttonId: 'beban', buttonText: {displayText: 'Beban' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: bn})
  }
  break
case 'yatim': case 'ytem': case 'nggapunyabapak': {
  if (!m.isGroup) return m.reply(mess.group)
  let member = participants.map(u => u.id)
  let ytm = member[Math.floor(Math.random() * member.length)]
  let jawab = `Yahaha Yatim\n\n@${ytm.split('@')[0]}`
  let menst = [ytm]
  let buttons = [
     {buttonId: 'yatim', buttonText: {displayText: 'Yatim' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: menst})
  }
  break
case 'pinterest': {
  if (!text) return m.reply(`Contoh : ${prefix + command} Naruto`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}]
  xcaa.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  }
  break
case 'wallpaper': {
  if (!text) return m.reply(`Contoh : ${prefix + command} Naruto HD`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}]
  xcaa.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
  }
  break
case 'quotesanime': {
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'Next Quotes'}, type: 1}]
  xcaa.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
  }
  break
case 'wikimedia': {
  if (!text) throw 'Masukkan Query Title'
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: 'Next Wiki'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `╭ Title : ${result.title}\n│ Source : ${result.source}\n└ Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break

//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('../lib/y2mate')
  if (!q) return m.reply(`Contoh : ${prefix + command} linknya`)
  if (!isUrl(q)) return m.reply('*Link Invalid*')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('*Link Invalid*')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `╭ Judul : ${media.title}\n│ Size : ${media.filesizeF}\n│ Url : ${isUrl(text)}\n│ Format : MP4\n└ Resolusi : ${args[1] || '360p'}`
  xcaa.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  let { yta } = require('../lib/y2mate')
  if (!q) return m.reply(`Contoh : ${prefix + command} linknya`)
  if (!isUrl(q)) return m.reply('*Link Invalid*')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('*Link Invalid*')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `╭ Title : ${media.title}\n│ Size : ${media.filesizeF}\n│ Url : ${isUrl(text)}\n│ Format : MP3\n└ Resolusi : ${args[1] || '128kbps'}`
  xcaa.sendImage(m.chat, media.thumb, caption, m)
  xcaa.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
  }
  break
case 'yts': case 'ytsearch': {
  m.reply(mess.wait)
  if (!text) throw `Contoh : ${prefix + command} Mamamontu`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '╭「 *Data Diproleh* 」\n└ Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `╭ No : ${no++}\n│ Type : ${i.type}\n│ Video ID : ${i.videoId}\n│ Title : ${i.title}\n│ Views : ${i.views}\n│ Duration : ${i.timestamp}\n│ Upload : ${i.ago}\n│ Author : ${i.author.name}\n└ Url : ${i.url}\n\n────────────\n\n`
  }
  xcaa.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
  }
  break
case 'play':
  if (!text) throw `Contoh : ${prefix + command} Sholawat Ibadahallah`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `╭ *Title :* ${anu.title}\n│ *Duration :* ${anu.timestamp}\n│ *Viewers :* ${anu.views}\n│ *Upload :* ${anu.ago}\n│ *Channel :* ${anu.author.url}\n└ *Url :* ${anu.url}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
  break

//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }

  }
  } catch (err) {
    console.log(util.format(err))
  }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
