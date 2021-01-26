let handler = async m => m.reply(`
╭════•›「 Donasi 」
┠ ✜► Telkomsel [0812-2756-0249]
┠ ✜► Dana [0812-2756-0249]
╰═══════════════
╭════•›「 Hubungi 」
┠ ✜► ngin donasi? Wa.me/6281227560249
╰═══════════════
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
