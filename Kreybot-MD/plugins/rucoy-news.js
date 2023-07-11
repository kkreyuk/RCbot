//By Kreyuk
let handler = async (m, { args, usedPrefix, text, command }) => { 
let nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/news`)
conn.sendMessage(m.chat,{image:{url: nk}, caption:'Info update'}, {quoted:m })
}

handler.command = /^news?$/i
handler.limit = true
handler.fail = null

export default handler