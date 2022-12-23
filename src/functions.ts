/**
 * Creates a new function that calls a given callback with pre-defined arguments.
 * @param callback the callback function to be called
 * @param args the arguments to be passed to the callback function
 * @returns a new function that calls the callback function with the pre-defined arguments
 */
export const preload = (callback: Function, ...args: any[]): () => any => {
    return () => callback(...args)
}