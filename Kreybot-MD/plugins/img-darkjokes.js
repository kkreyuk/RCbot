
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
   conn.sendMessage(m.chat, { image: {url: `https://api.zahwazein.xyz/randomimage/darkjoke?apikey=zenzkey_d928ce4e47d5`}}, {quoted: m})
   }
handler.help = ['darkjokes']
handler.tags = ['img']
handler.command = ['darkjokes'] 
handler.diamond = true

export default handler


