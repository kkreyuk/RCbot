import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => {
if (!text) return m.reply(`Contoh: .kalkulasi 200`)
if(text < 1000) {
let nk = await (`https://image.thum.io/get/auth/67655-best/noanimate/fullpage/https://rucoykingdom.com/calculator/${text}`)
conn.sendMessage(m.chat,{image:{url: nk}, caption: 'Level ' +  text}, m)
} else if ( text >= 1000) { return m.reply('level 1000 dan selebihnya masih belum ada bang')
}else { return m.reply('Angka ngab gua cubit nih🙂')
}
}
handler.command = /^kalkulasi?$/i
handler.limit = true
export default handler





