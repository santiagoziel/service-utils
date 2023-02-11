# Collection of Reusable TypeScript Classes, Functions, and Types for Common Use Cases
## How To use
### Installation
*only available on the GitHub registry*
```
npm install @santiagoziel/service-utils
```

### `env_configuration` class

The `env_config` class allows you to retrieve values from environment variables and handle cases where the environment variables are not set or have the wrong data type. It provides several methods for retrieving values from environment variables:

#### Example

```typescript
import {env_config} from "@santiagoziel/service-utils"
const config = new env_config()

//please dont log your secrets this is just an example
console.log(config.stringOrError("SECRET_KEY"));
```

***Several options to retrieve env variables are available. Check[ @santiagoziel/service-utils/dist/config.d.ts](https://github.com/santiagoziel/service-utils/blob/main/src/config.ts) for more info***

### `Resolution` type

The `Resolution` type represents the result of an operation that can either succeed or fail. It has two possible states:

- `succeded`: The operation was successful and the result is available in the `value` field.
- `failed`: The operation failed and the reason for the failure is available in the `reason` field.

#### Example

```typescript
type Error = {message: string, code: number};

function divide(a: number, b: number): Resolution<number, Error> {
  if (b === 0) {
    return { status: "failed", reason: { message: "Cannot divide by zero.", code: 400 } };
  }
  return { status: "succeded", value: a / b };
}

const result = divide(10, 2);

if (result.status === "succeded") {
  console.log(result.value); // 5
} else {
  console.log(result.reason.message); // "Cannot divide by zero."
  console.log(result.reason.code); // 400
}

```

### Methods

#### `preload` function

The `preload` function creates a new function that calls a given callback with pre-defined arguments. This can be useful for creating functions that are pre-loaded with certain arguments and can be called later, without having to pass the arguments every time.

#### Example

```typescript
import {preload} from "@santiagoziel/service-utils"

const logString = (a: string) => console.log(a);

const loaded = preload(logString, "Hi!");

loaded(); // logs "Hi!"
```