
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
   conn.sendMessage(m.chat, { image: {url: `https://api.zahwazein.xyz/randomimage/memeindo?apikey=zenzkey_d928ce4e47d5`}}, {quoted: m})
   }
handler.help = ['meme']
handler.tags = ['img']
handler.command = ['meme', 'memes'] 
handler.diamond = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}