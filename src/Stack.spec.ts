import { describe, expect, it } from "vitest"
import { Stack } from "./Stack.js"

describe("Stack", () => {
  it("checks if the stack is empty", () => {
    const stack = new Stack()

    const isEmpty = stack.isEmpty()

    expect(isEmpty).toBe(true)
  })
})
