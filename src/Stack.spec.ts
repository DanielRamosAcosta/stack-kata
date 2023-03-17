import { describe, expect, it } from "vitest"
import { Stack } from "./Stack.js"

describe("Stack", () => {
  it("checks that a new stack is always empty", () => {
    const stack = new Stack()

    const isEmpty = stack.isEmpty()

    expect(isEmpty).toBe(true)
  })

  it("checks that a new item is pushed", () => {
    const stack = new Stack()
    const item = "foo"

    stack.push(item)

    expect(stack.isEmpty()).toBe(false)
  })
})
