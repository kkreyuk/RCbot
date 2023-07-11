import uploadImage from '../lib/uploadImage.js'
import ocrapi from 'ocr-space-api-wrapper'
import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => { 
if(!text) return m.reply(`contoh: ${usedPrefix + command} kfight`)
let real = await (`https://api.screenshotone.com/take?access_key=ot23tIOeLagN2A&url=https://www.rucoyonline.com/guild/${text}&full_page=true&device_scale_factor=1&format=png&block_ads=true&block_cookie_banners=true&block_trackers=true&cache=false`)
let nk = await (`https://image.thum.io/get/width/600/crop/500/noanimate/https://www.rucoyonline.com/guild/${text}`)
let capt = (` *guild:* ${text} `)
    let hasil = await ocrapi.ocrSpace(nk)
    let res = hasil.ParsedResults[0].ParsedText
  let nothing = `Guilds\r\n`
if( res == nothing) { return m.reply('guild tidak ada, pastikan penulisan huruf kapital benar')
} else {

conn.sendMessage(m.chat,{image:{url: real}, caption:capt}, {quoted:m })
}}

handler.command = /^guild?$/i
handler.limit = true

handler.fail = null

export default handler

