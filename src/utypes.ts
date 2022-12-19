export type Resolution<A> = {state: "succeded", value: A} |
                            {state: "failed", reason: string}
