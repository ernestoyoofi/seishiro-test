export default async function UserMe({ system, type, middleware, data = {} } = {}) {
  // Use Middleware
  if(!middleware?.response.data?.isLogin) {
    return {
      error: "info:you-need-login-now"
    }
  }
  return {
    data: {
      username: middleware?.response?.data?.username
    }
  }
}