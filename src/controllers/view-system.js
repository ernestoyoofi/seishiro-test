export default async function ViewSystem({ system, type, middleware, data = {} } = {}) {
  // Use Middleware
  if(!middleware?.response.data?.isLogin && type === "system:info-middleware") {
    return {
      error: "info:you-need-login-now"
    }
  }
  return {
    status: isNaN(parseInt(data.status))? undefined : parseInt(data.status),
    data: {
      headers: system.headers,
      cookies: system.cookies,
      ip: system.ip,
      location: system.location,
      type_call: type,
      middleware: middleware,
      body: data,
      say_hi: middleware?.response?.data?.username || undefined
    }
  }
}