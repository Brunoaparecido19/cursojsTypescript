export function exFuncao(this: Date, argumento1: string, age?: number): void {
  console.log(this);
  console.log(argumento1, age);
}
exFuncao.call(new Date(), 'luiz', 30);
exFuncao.apply(new Date(), ['luiz', 30]);
