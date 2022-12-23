export const preload = (callback:(...args: any[]) => any, ...args: any[]): () => any => {
    return () => callback(args)
}