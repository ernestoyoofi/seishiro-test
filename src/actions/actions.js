import "../lib/dotenv"
import { PolicyBuilder, Actions } from "seishiro"
import message from "./message"
import registry from "./registry"

// Rules System
const policy = new PolicyBuilder({
  passkey: process.env.SEISHIRO_PASSKEY,
  version_now: "1.4.5",
  version_min: "1.4.0",
  version_forceupdate: true,
  skip_middleware_context: true
})

// Action Setup
const actions = new Actions({
  registry: registry,
  message: message,
  policy: policy,
})

export default actions