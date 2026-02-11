export default async function UserLogout({ system, type, middleware, data = {} } = {}) {
  // Use Middleware
  if(!middleware?.response.data?.isLogin) {
    return {
      error: "info:you-need-login-now"
    }
  }
  return {
    rm_cookie: [
      "auth-example", // New
      {
        key: "auth-example", // Old Version
      }
    ],
    data: {
      success: true
    }
  }
}