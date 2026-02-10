import { RegistryBuilder } from "seishiro"

import GenerateCredentials from "@/controllers/generate-credentials"
import ViewSystem from "@/controllers/view-system"

const registry = new RegistryBuilder()
registry.set("example:generate-example-credentials", GenerateCredentials)
registry.set("example:view-system", ViewSystem)

export default registry