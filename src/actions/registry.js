import { RegistryBuilder } from "seishiro"

import GenerateCredentials from "@/controllers/generate-credentials"
import ViewSystem from "@/controllers/view-system"
import UserMe from "@/controllers/user-me"
import Middleware_GetAuth from "@/middleware/auth"
import UserLogout from "@/controllers/user-logout"

const registry = new RegistryBuilder()

registry.set("system:info", ViewSystem)
registry.set("system:info-middleware", ViewSystem, Middleware_GetAuth)
registry.set("user:getauth", GenerateCredentials)
registry.set("user:me", UserMe, Middleware_GetAuth)
registry.set("user:logout", UserLogout, Middleware_GetAuth)

export default registry