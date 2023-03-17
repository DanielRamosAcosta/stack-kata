export class Stack {
  private elements: Array<string> = []
  push(element: string) {
    this.elements.push(element)
  }
  pop(): string | undefined {
    return this.elements.pop()
  }
  isEmpty() {
    return this.elements.length === 0
  }
  peek() {
    return this.elements[this.elements.length - 1]
  }
}
