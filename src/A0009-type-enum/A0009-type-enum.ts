// tipo enum é um tipo primitivo que representa um conjunto de valores que podem ser usados como constantes.
enum Colors {
  // eu poderia atribur um valor a cada constante, no caso abaixo ele segue o indece do objeto
  // RED = 0, MAS PODERIA SER ASSIM TAMBÉM : RED = 100, RED = 200, RED = 300, RED = 400, RED = 500 etc...
  // GREEN = 1,
  // BLUE = 2,
  RED, // 0 PARA RED
  GREEN, // 1 PARA GREEN
  BLUE, // 2 PARA BLUE
  ROXO = 'roxo', //  TAMBÉM PODE SER ASSIM TAMBÉM : ROXO = 'roxo',
}
enum Colors {
  // ELE NÃO RECLAMA DO NOME IGUAL MAIS ELE UNE OS VALORES DO MESMO NOME COMO UM ARRAY COM VALORES DIFERENTES
  BLACK = 100,
  WHITE,
}
console.log(Colors);
