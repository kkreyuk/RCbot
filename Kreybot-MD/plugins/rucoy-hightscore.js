// Membuat objek Date dengan tanggal dan waktu saat ini
const tanggalSekarang = new Date();

// Mendapatkan informasi tanggal dan waktu
const tanggal = tanggalSekarang.getDate();
const bulan = tanggalSekarang.getMonth() + 1; // Perhatikan: bulan dimulai dari 0, sehingga perlu ditambah 1
const tahun = tanggalSekarang.getFullYear();
var hs = `Hightscore
-experience
-melee
-distance
-magic

*Contoh:* .hightscore experience`
var score = ' ';
var handler = async (m, { args, usedPrefix, text, command }) => { 
if(!text) return m.reply(hs)
if(text == 'experience') {
var nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/highscores/experience/${tahun}/${bulan - 1}`)
var capt = (` *Hightscore:* ${text} `)
conn.sendMessage(m.chat,{image:{url: nk}, caption:capt}, {quoted:m })
} else if ( text == 'melee' ) {
var nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/highscores/melee/${tahun}/${bulan - 1}`)
var capt = (` *Hightscore:* ${text} `)
conn.sendMessage(m.chat,{image:{url: nk}, caption:capt}, {quoted:m })
} else if ( text == 'distance' ) {
var nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/highscores/distance/${tahun}/${bulan - 1}`)
var capt = (` *Hightscore:* ${text} `)
conn.sendMessage(m.chat,{image:{url: nk}, caption:capt}, {quoted:m })
} else if( text == 'magic' ) {
 var nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/highscores/magic/${tahun}/${bulan - 1}`)
var capt = (` *Hightscore:* ${text} `)
conn.sendMessage(m.chat,{image:{url: nk}, caption:capt}, {quoted:m })
 } else { return m.reply(`hightscore ${text} tidak ada`)}
 }
 

handler.command = /^hightscore?$/i
handler.limit = true

handler.fail = null

export default handler
