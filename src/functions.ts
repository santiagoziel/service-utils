export const preload = (callback: Function, ...args: any[]): () => any => {
    return () => callback(...args)
}

const logString = (a:string) => {
    console.log(a);
}

const loaded = preload(logString, "Hi!")

loaded()