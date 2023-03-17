import { describe, expect, it } from "vitest"
import { Stack } from "./Stack.js"

describe("Stack", () => {
  it("is empty when created", () => {
    const stack = new Stack()

    const isEmpty = stack.isEmpty()

    expect(isEmpty).toBe(true)
  })

  it("pushes an element", () => {
    const stack = new Stack()
    const element = "foo"

    stack.push(element)

    expect(stack.isEmpty()).toBe(false)
    expect(stack.peek()).toBe("foo")
  })

  it("peeks the last element", () => {
    const stack = new Stack()
    const element = "bar"
    stack.push(element)

    const peekedElement = stack.peek()

    expect(peekedElement).toBe("bar")
  })

  it("pops the last element", () => {
    const stack = new Stack()
    const element = "foo"
    stack.push(element)

    const poppedElement = stack.pop()

    expect(poppedElement).toBe("foo")
    expect(stack.isEmpty()).toBe(true)
  })

})
