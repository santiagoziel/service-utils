import axios from 'axios';

/**
 * Creates a new function that calls a given callback with pre-defined arguments.
 * @param callback the callback function to be called
 * @param args the arguments to be passed to the callback function
 * @returns a new function that calls the callback function with the pre-defined arguments
 */
export const preload = <A, U extends any[]>(callback: (...args: U) => A, ...args: U): () => A => {
    return () => callback(...args)
}

/**
 * Returns a new function with pre-bound initial arguments, inspired by Python's `partial`.
 * @param func The function to partially apply arguments to.
 * @param boundArgs The arguments that are pre-bound to the function.
 * @returns A new function that when called, will invoke `func` with the pre-bound arguments followed by any additional arguments passed to it.
 */
const partial = <T, U extends any[], V extends any[]>(func: (...args: [...U, ...V]) => T, ...boundArgs: U): ((...args: V) => T) => {
 return (...restArgs: V) => func(...boundArgs, ...restArgs);
}


/**
 * Sends a push notification using the Pushover API.
 * @param userKey The user key of the Pushover user to receive the notification.
 * @param appKey The API key of the Pushover application to use.
 * @param message The message to send in the notification.
 * @param device The device name to send the notification to (optional).
 * @param priority The priority of the notification (0 = lowest, 2 = high, default = 0).
 * @param retry The number of seconds to retry sending the notification (optional, only used for priority 2).
 * @param expire The number of seconds to keep trying to send the notification (optional, only used for priority 2).
 */
export const sendPushNotification = async (
    userKey: string,
    appKey: string,
    message: string,
    device?: string,
    priority: 0 | 1 | 2 = 0,
    retry?: number,
    expire?: number
  ) => {
    try {
      const data: any = {
        token: appKey,
        user: userKey,
        message: message,
        priority: priority,
      };
  
      if (device) {
        data.device = device;
      }
  
      if (priority === 2 && retry && expire) {
        data.retry = retry;
        data.expire = expire;
      }
  
      const response = await axios({
        method: 'post',
        url: 'https://api.pushover.net/1/messages.json',
        data,
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
