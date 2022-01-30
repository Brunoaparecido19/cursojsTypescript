// utilizar any em apenas ultimo caso
function showMensage(msg: any) {
  return msg;
}
console.log(showMensage('Hello World'));
console.log(showMensage(1));
console.log(showMensage(true));
console.log(showMensage({ nome: 'Bruno', idade: 21 }));
console.log(showMensage([1, 2, 3, 4, 5]));
