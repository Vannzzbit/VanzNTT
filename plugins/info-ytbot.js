import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Follow TT Owner*\n\ntiktok.com/@kelasdekk98\n\n Jangan Lupa Subscribe Untuk Mengetahui Video Terbaru..`,wm + '\n\n' + botdate, giflogo, [['OK','ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: '⚘ ᴄʀᴇᴀᴛᴇ ʙʏ Vanz',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: 'tiktok.com/@kelasdekk98'
                      }}
})
}


handler.help = ['ytbot']
handler.tags = ['info']
handler.command = ['ytbot']
export default handler
