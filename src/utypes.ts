/**
 * The `Resolution` type represents the result of an operation that can either succeed or fail.
 * It has two possible statuss:
 *   - "succeded": The operation was successful and the result is available in the `value` field.
 *   - "failed": The operation failed and the reason for the failure is available in the `reason` field.
 */
export type Resolution<A, B = string> = {status: "succeded", value: A} |
                            {status: "failed", reason: B}
