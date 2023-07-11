import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { args, usedPrefix, text, command }) => {
// Membuat objek Date dengan tanggal dan waktu saat ini
const tanggalSekarang = new Date();

// Mendapatkan informasi tanggal dan waktu
const tanggal = tanggalSekarang.getDate();
const bulan = tanggalSekarang.getMonth() + 1; // Perhatikan: bulan dimulai dari 0, sehingga perlu ditambah 1
const tahun = tanggalSekarang.getFullYear();
const harii = moment.tz('Asia/Jakarta').format('dddd')


if( harii == 'Friday') {
let menunya =`

━━━ *Rucoy-Bot* ━━━

_Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja._

 *MENU UTAMA*
 .nick
 .news
 .kalkulasi
 .hightscore
 .guild
 .scammer
 `
 conn.sendMessage(m.chat, { text: menunya}, {quoted:m })
} else {

	let menunya = `
━━━ *Rucoy-Bot* ━━━

 *MENU UTAMA*
 .nick
 .news
 .kalkulasi
 .hightscore
 .guild
 .scammer
`
conn.sendMessage(m.chat, { text: menunya}, {quoted:m })
}
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(rucoy)$/i

handler.exp = 3

export default handler
