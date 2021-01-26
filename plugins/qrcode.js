let qrcode = require("qrcode")

let handler  = async (m, { conn, text }) => {
  conn.sendFile(m.chat, await qrcode.toDataURL(text, { scale: 8 }), 'qrcode.png', '¯\\_(ツ)_/¯', m)
}
handler.command = /^qr(code)?$/i
handler.limit = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

