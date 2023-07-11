import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(who|hint)/i.test(m.quoted.text) || /.*(who|hint)/i.test(m.text)) return !0
    this.siapakahaku = this.siapakahaku ? this.siapakahaku : {}
    if (!(id in this.siapakahaku)) return m.reply('Soal itu telah berakhir')
   
    if (m.quoted.id == this.siapakahaku[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.siapakahaku[id][1]))
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.siapakahaku[id][3])
            delete this.siapakahaku[id]
             m.reply(`Yah Menyerah😌 \n jawabanya : *${json.jawaban}*`)
        }
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].
                exp += this.siapakahaku[id][2]
            m.reply(`*Benar!*\n+${this.siapakahaku[id][2]} XP`)
            clearTimeout(this.siapakahaku[id][3])
            delete this.siapakahaku[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else if ( m.text != nyerah && m.text != menyerah) {m.reply(`*Salah!*`)
    }}
    return !0
}
handler.exp = 0

export default handler
