import { Server } from "http"

export type SideEffect<A> = () => Promise<A>

export type App<A> = { 
    app: A, 
    runListen: SideEffect<Server>, 
    runMigrations: SideEffect<void>, 
    closeDatabase: SideEffect<void> 
}

export type Resolution<A> = {state: "succeded", value: A} |
                            {state: "failed", reason: string}
