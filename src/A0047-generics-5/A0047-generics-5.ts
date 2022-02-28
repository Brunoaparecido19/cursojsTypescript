export class Stack<T> {
  private contador = 0;
  private elementos: { [K: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }
  isEmpty(): boolean {
    return this.contador === 0;
  }
  stackSize(): number {
    return this.contador;
  }
  showStack(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}

const stack = new Stack<number | string>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.showStack();

while (!stack.isEmpty()) {
  console.log('\n', stack.pop());
}
