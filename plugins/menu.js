let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Adiixyz/simple-botwa')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Adiixyz')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `「 *ADIIXYZBOTZ* 」

Name : ${name}
Exp : ${exp}

Time : ${time}
Day : ${week}
Date : ${date}
Weton : ${weton}

Fitur masih dikit. Kan gw noob:v

[LEADERBOARD]
${_p}leaderboard [jumlah user]

[MAIN]
${_p}menu
${_p}help

[QUOTES]
${_p}bucin
${_p}pantun

[QURAN]
${_p}murothal
${_p}quran

[KERANG]
${_p}apakah
${_p}kapankah
${_p}kapan

[IDK:V]
${_p}qr <teks>

[STICKER]
${_p}sticker (caption)
${_p}stiker <url>
${_p}toimg (reply)

[SCREENSHOT]
${_p}ssweb <url>
${_p}sswebf <url>

[SEARCHING]
${_p}google <pencarian>

[OTHER]
${_p}readmore <teks>|<text>
${_p}modapk

[GROUP]
${_p}add nomor
${_p}promote @tag
${_p}demote @tag(admin)
${_p}linkgrup
${_p}hidetag [text]
${_p}listonline
${_p}kick @tag

[BAILEYS]
${_p}jadibot
${_p}berhenti
${_p}getcode

[OWNER]
${_p}bcgc [text]
${_p}deletechat (chat grup)
${_p}deletechat group
${_p}mutechat (chat grup)
${_p}mutechat group
> 

[CREATED BY ADIIXYZ]
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help)$/i

module.exports = handler
