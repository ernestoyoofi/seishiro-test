require("./dotenv")
const jwt = require("jsonwebtoken")
const isJson = require("is-json")

const passkey = process.env.JSONWEBTOKEN_SECRET_KEY

function toAuthToken({ ...data } = {}) {
  return jwt.sign({
    ...data,
    time: new Date().getTime(),
  }, passkey, {
    algorithm: "HS256",
    expiresIn: "80d" // 8 Days
  })
}

function toAuthData(data = "") {
  try {
    const a = jwt.verify(data, passkey)
    return {
      ...a,
      error: false,
    }
  } catch(e) {
    console.log("[Jsonwebtoken]:", e)
    return { error: true }
  }
}

function validateJWT(data = "") {
  const openTokenVariable = String(typeof data !== "string"? "":(data||"")).trim()
  // Format : [header, payload, signature]
  const [headerJWT, payloadJWT] = openTokenVariable.split(".")
  if(!(headerJWT.startsWith("eyJ") && payloadJWT.startsWith("eyJ"))) {
    return false
  }
  if(!isJson(Buffer.from(headerJWT, "base64").toString())) {
    return false
  }
  if(!isJson(Buffer.from(payloadJWT, "base64").toString())) {
    return false
  }
  return true
}

module.exports = {
  toAuthToken,
  toAuthData,
  validateJWT
}