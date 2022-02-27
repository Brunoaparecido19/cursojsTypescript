type Veiculo = {
  marca: string;
  ano: string;
};
type Carro = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Carro = {
  brand: 'BMW',
  year: '2022',
  name: ' BMW 320i GP',
};

console.log(carro.name);
