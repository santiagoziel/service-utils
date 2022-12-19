# Typescript package to configure env variables and Resolution response type

## How To use
### Installation
```
npm install @santiagoziel/service-utils
```

### env configuration

```typescript
import {env_config} from "@santiagoziel/service-utils"
const config = new env_config()

//please dont log your secrets this is just an example
console.log(config.stringOrError("SECRET_KEY"));
```

#### Several options to retrieve env variables are available. Check @santiagoziel/service-utils/dist/config.d.ts for more info

### Resolution response type
```typescript
import {Resolution} from "@santiagoziel/service-utils"

//please dont store plain text passwords this is just an example
export const register_user_with_password = async (username: string, password: string): Promise<Resolution<User>> => {
    const taken: User | null = await User.findOne({ where: {username} })
    if (taken) return {state: "failed", reason: "Taken username"}
    const user: User = await User.create({ where: {username, password} })
    return {state: "succeded", value: user}
}
```