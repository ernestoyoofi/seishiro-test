import { MessageBuilder } from "seishiro"

// --- English (EN) ---
const msg_en = new MessageBuilder("en")
// Default Message
msg_en.set("no-response-sending", "Server not response!")
msg_en.set("no-registry", "Registry not found!")
msg_en.set("internal-server-error", "Internal server error!")
// Costum Message
msg_en.set("you-have-login-rightnow", "You have login right now!")
msg_en.set("you-need-login-now", "You need login right now!")
// Testing Avaliable Language
msg_en.set("only-support-test1", "This variable only show on English Language")

// --- Indonesian (ID) ---
const msg_id = new MessageBuilder("id")
// Default Message
msg_id.set("no-response-sending", "Server tidak merespon!")
msg_id.set("no-registry", "Registry tidak ditemukan!")
msg_id.set("internal-server-error", "Internal server bermasalah!")
// Costum Message
msg_id.set("you-have-login-rightnow", "Kamu sudah masuk sekarang!")
msg_id.set("you-need-login-now", "Kamu perlu login sekarang!")
// Testing Avaliable Language
msg_en.set("only-support-test2", "Variable ini hanya dapat memunculkan Bahasa Indonesia")

// --- Japanese (JP) ---
const msg_jp = new MessageBuilder("jp")
// Default Message
msg_jp.set("no-response-sending", "サーバーからの応答がありません！")
msg_jp.set("no-registry", "レジストリが見つかりません！")
msg_jp.set("internal-server-error", "内部サーバーエラーが発生しました！")
// Costum Message
msg_jp.set("you-have-login-rightnow", "既にログインしています！")
msg_jp.set("you-need-login-now", "ログインが必要です！")
// Testing Avaliable Language
msg_jp.set("only-support-test3", "")

// --- Korean (KR) ---
const msg_kr = new MessageBuilder("kr")
// Default Message
msg_kr.set("no-response-sending", "서버가 응답하지 않습니다!")
msg_kr.set("no-registry", "레지스트리를 찾을 수 없습니다!")
msg_kr.set("internal-server-error", "내부 서버 오류가 발생했습니다!")
// Costum Message
msg_kr.set("you-have-login-rightnow", "이미 로그인되어 있습니다!")
msg_kr.set("you-need-login-now", "지금 로그인이 필요합니다!")
// Testing Avaliable Language
msg_kr.set("only-support-test4", "")

// --- Spanish (ES) ---
const msg_es = new MessageBuilder("es")
// Default Message
msg_es.set("no-response-sending", "¡El servidor no responde!")
msg_es.set("no-registry", "¡Registro no encontrado!")
msg_es.set("internal-server-error", "¡Error interno del servidor!")
// Costum Message
msg_es.set("you-have-login-rightnow", "¡Ya has iniciado sesión!")
msg_es.set("you-need-login-now", "¡Necesitas iniciar sesión ahora!")
// Testing Avaliable Language
msg_es.set("only-support-test5", "")

// Apply Language
msg_en.use(msg_id)
msg_en.use(msg_jp)
msg_en.use(msg_kr)
msg_en.use(msg_es)

export default msg_en