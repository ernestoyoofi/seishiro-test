import { MessageBuilder } from "seishiro"

// Language (EN)
const msg_en = new MessageBuilder("en")
// Default Message
msg_en.set("no-response-sending", "Server not response!")
msg_en.set("no-registry", "Registry not found!")
msg_en.set("internal-server-error", "Internal server error!")
// Costum Message
msg_en.set("you-have-login-rightnow", "You have login rightnow!")

// Language (ID)
const msg_id = new MessageBuilder("id")
// Default Message
msg_id.set("no-response-sending", "Server tidak merespon!")
msg_id.set("no-registry", "Registry tidak ditemukan!")
msg_id.set("internal-server-error", "Internal server bermasalah!")
// Costum Message
msg_id.set("you-have-login-rightnow", "Kamu sudah masuk sekarang!")

// Apply New Language
msg_en.use(msg_id)

export default msg_en