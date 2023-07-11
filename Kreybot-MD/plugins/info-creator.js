import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Krey\nNICKNAME: Krey\nORG: Krey\nTITLE:\nitem1.TEL;waid=62895433590601:+62 8954 3359 0601\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://www.zeltoria.my.id\nitem2.EMAIL;type=INTERNET: Krey@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Itu dia nomer ownerku, Krey`)
}
if (command == 'creator') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Krey\nNICKNAME: Krey\nORG: Krey\nTITLE:\nitem1.TEL;waid=62895433590601:+62 8954 3359 0601\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://www.zeltoria.my.id\nitem2.EMAIL;type=INTERNET: Krey@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Tuh nomor si creator`)
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner|owner2)$/i

export default handler