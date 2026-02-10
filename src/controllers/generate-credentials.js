import { validateJWT, toAuthToken } from "@/lib/jwt"

export default async function GenerateCredentials({ system, type, middleware, data = {} } = {}) {
  const username = typeof data.username === "string"? String(data.username).trim() : ""
  const token = toAuthToken({
    username: username || "John Doe!",
  })
  const checkerJWT = validateJWT(system.cookies["auth-example"] || "")
  if(checkerJWT) {
    return {
      headers: {
        "X-Redirect": "/"
      },
      error: "generate-example-credentials:you-have-login-rightnow"
    }
  }
  return {
    headers: {
      "X-Example-Token-Generate": token
    },
    set_cookie: [
      {
        key: "auth-example",
        value: token,
        options: {}
      }
    ],
    data: {
      success: true,
      token: token
    }
  }
}