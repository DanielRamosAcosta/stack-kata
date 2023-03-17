export class Stack {
  private elements: Array<string> = []
  get size() {
    return this.elements.length
  }
  push(element: string) {
    if (this.size >= 5) {
      throw new Error("Stack overflow")
    }

    this.elements.push(element)
  }
  pop(): string | undefined {
    return this.elements.pop()
  }
  isEmpty(): boolean {
    return this.elements.length === 0
  }
  peek() {
    return this.elements[this.elements.length - 1]
  }
}
