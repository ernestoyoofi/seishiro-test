import { validateJWT, toAuthData } from "@/lib/jwt"

export default async function Middleware_GetAuth({ system, type, data = {} } = {}) {
  const tokenValid = String(system.cookies["auth-example"] || "")
  const isvalidJwt = validateJWT(tokenValid)
  let dataJwt = {}
  if(isvalidJwt) {
    dataJwt = toAuthData(tokenValid)
  }
  return {
    data: {
      cookie: system.cookies["auth-example"] || null,
      isLogin: isvalidJwt? (!!dataJwt.username)? true : false : false,
      username: dataJwt?.username || null
    }
  }
}