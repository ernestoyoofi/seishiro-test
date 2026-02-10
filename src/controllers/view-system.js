export default async function ViewSystem({ system, type, middleware, data = {} } = {}) {
  return {
    data: {
      headers: system.headers,
      cookies: system.cookies,
      ip: system.ip,
      location: system.location,
    }
  }
}