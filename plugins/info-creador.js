let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛;;\nFN:𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛\nORG:𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛\nTITLE:\nitem1.TEL;waid=5491156178758:5218261275256\nitem1.X-ABLabel:𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
