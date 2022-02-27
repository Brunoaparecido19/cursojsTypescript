// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'Texto qualquer',
  // data: new Date(),
};

console.log(
  documento.data?.toLocaleDateString('pt-br') ?? '1 - ixi não existe data',
);
console.log(undefined ?? '2 - ixi não existe data');
console.log(null ?? '3 - ixi não existe data');
console.log(false ?? '4 - ixi não existe data');
