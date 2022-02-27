type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  azul: 'Blue',
  amarelo: 'Yellow',
  vermelho: 'Red',
  verde: 'Green',
  rosa: 'Pink',
  roxo: 'Purple',
  castanho: 'Brown',
  laranja: 'Orange',
  cinza: 'Grey/gray',
  branco: 'White',
  preto: 'Black',
  bege: 'Beige',
  mostarda: 'Mostard',
  salmão: 'Salmon',
  lilás: 'Lilac',
  violeta: 'Violet',
  cáqui: 'Khaki',
  caramelo: 'Caramel',
};
function traduzirCores(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}
console.log(traduzirCores('vermelho', coresObj));
