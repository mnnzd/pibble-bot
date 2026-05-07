import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
[ '34016526909591', 'GUERRA OFC', true ],
[ '123884707811532', 'Ayudante', true ]
  ]
global.mods = []
global.prems = []

global.emoji = '🍡'
global.emoji2 = '🍥'
global.namebot = 'GUERRA BOT👑'
global.botname = 'GUERRA BOT👑'
global.banner = 'https://api.dix.lat/media2/1777604199636.jpg'
global.packname = 'GUERRA BOT👑'
global.author = '© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙂𝙐𝙀𝙍𝙍𝘼 𝘽𝙊𝙏 👑'
global.moneda = 'MayCoins'
global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.usedPrefix = '#'
global.user2 = '18'
global.sessions = 'GuerraBot'
global.jadi = 'GuerraBots'
global.yukiJadibts = true

global.namecanal = '⌈ 👑 ⌋ 𝙂𝙐𝙀𝙍𝙍𝘼 𝘽𝙊𝙏 ┆ 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 ⌈ 👑 ⌋'
global.idcanal = '120363427020147321@newsletter'
global.idcanal2 = '120363427020147321@newsletter'
global.canal = 'https://whatsapp.com/channel/0029Vb7ldkaKGGGMdqKACP0y'
global.canalreg = '120363427020147321@newsletter'

global.ch = {
  ch1: '120363427020147321@newsletter'
}
global.rcanal = {
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363427020147321@newsletter', // pon el ID de tu canal 
                serverMessageId: 100,
                newsletterName: 'canal oficial'
            },
            externalAdReply: {
                showAdAttribution: true,
                title: "hello",
                body: '🦉',
                previewType: "PHOTO",
                thumbnailUrl: "https://api.dix.lat/media2/1778159078063.jpg", // pon la URL de la imagen 
                sourceUrl: "https://whatsapp.com/channel/0029Vb7ldkaKGGGMdqKACP0y", //pon la URL de tu canal 
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
}          
global.multiplier = 69
global.maxwarn = 2

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Se actualizo el 'config.js'"))
  import(`file://${file}?update=${Date.now()}`)
})
