import { describe, expect, it } from "vitest"
import { Stack } from "./Stack.js"

describe("Stack", () => {
  it("is empty when created", () => {
    const stack = new Stack()

    const isEmpty = stack.isEmpty()

    expect(isEmpty).toBe(true)
  })

  it("pushes an item", () => {
    const stack = new Stack()
    const item = "foo"

    stack.push(item)

    expect(stack.isEmpty()).toBe(false)
    expect(stack.peek()).toBe("foo")
  })

  it("peeks the last element", () => {
    const stack = new Stack()
    const item = "bar"
    stack.push(item)

    const peekedItem = stack.peek()

    expect(peekedItem).toBe("bar")
  })
})
