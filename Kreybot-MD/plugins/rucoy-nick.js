//By Kreyuk
import uploadImage from  '../lib/uploadImage.js'
import ocrapi from "ocr-space-api-wrapper"
import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
 
let handler = async (m, { args, usedPrefix, text, command }) => { 
if(!text) return m.reply(`contoh: ${usedPrefix + command} kfight`)
let result = await (`https://image.thum.io/get/width/2000/fullpage/noanimate/https://www.rucoyonline.com/characters/${text}`)
let nk = await (`https://image.thum.io/get/width/1200/noanimate/crop/450/https://www.rucoyonline.com/characters/${text}`)
let capt = (` Nick: *${text}* `)
let error = '1\r\n' +
    'News\r\n' +
    '•i\r\n' +
    'Highscores Characters Guilds\r\n' +
    'Rucoy Online welcome\r\n' +
    'A Character not found.\r\n' +
    'Search for a character\r\n' +
    'Character Name\r\n' +
    'Sign in •\r\n' +
    '0 2017\r\n' +
    'Rucoy Online\r\n'
let hasil = await ocrapi.ocrSpace(nk)
    let res = hasil.ParsedResults[0].ParsedText
if( res == error) { return m.reply('Nickname tidak ada, pastikan penulisan huruf kapital benar')
} else {
conn.sendMessage(m.chat,{image:{url: result}, caption:capt}, {quoted:m })
}
}


handler.command = /^nick?$/i
handler.limit = true

handler.fail = null

export default handler

