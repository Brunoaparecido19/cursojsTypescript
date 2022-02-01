const objetoA: {
  // readonly é uma propiedade para Não poder alterar essa o valor de uma chave
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};
objetoA.chaveB = 'outro valor';
objetoA.chaveC = 'outro valor';
console.log(objetoA);
