import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, usedPrefix, command }) => {
	//    return m.reply("Maaf, fitur sedang di perbaiki");
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!mime)
		throw `Fotonya Mana?`;
	if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
	else conn.unblur_high[m.sender] = true;
	m.reply("Sedang Di Proses...");
	let img = await q.download?.();
	let upld = await uploadImage(img);
	conn.sendFile(m.chat, upld, 'imagemini.jpg', 'sudah', m)
};
handler.help = ["remini"];
handler.tags = ["ai"];
handler.command = ["remini"];

handler.premium = true

export default handler;
