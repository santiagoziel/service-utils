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

### `AppError` class
`AppError` is a custom error class that extends the built-in Error class in Typescript. It adds a code property to the error object, which can be useful in identifying specific types of errors for HTTP.

#### Example

```typescript
async helow(credentials: gateWayModels.SuperUserCredentials){
    try{
      const authResult = await authorizeUser(credentials.username, credentials.password);
      if (authResult.status == 'failed') throw new AppError(authResult.reason , 401);
      return {status: "authorized"}}
    catch (error: any) {
      return { status: 'failed', reason: error.message, code: error.code };
      }
    }
```

### `Resolution` type

The `Resolution` type represents the result of an operation that can either succeed or fail. It has two possible states:

- `succeded`: The operation was successful and the result is available in the `value` field, which is of the first    generic type `A` provided.
- `failed`: The operation failed and the reason for the failure is available in the `reason` field, which is of the second generic type `B` provided with a default of string.

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

### `preload` function

The `preload` function creates a new function that calls a given callback with pre-defined arguments. This can be useful for creating functions that are pre-loaded with certain arguments and can be called later, without having to pass the arguments every time.

#### Example

```typescript
import {preload} from "@santiagoziel/service-utils"

const logString = (a: string) => console.log(a);

const loaded = preload(logString, "Hi!");

loaded(); // logs "Hi!"
```

### `sendPushNotification` function

The `sendPushNotification` function is a utility function that sends a push notification to a specified device using the Pushover API. The function takes in the necessary parameters such as the user key, app key, message, and device, and sends the notification with an optional priority level and expiration time.

#### Example 
```typescript
sendPushNotification("Your User Key", "Your app Key", "Hello World!", "phone123");
```
