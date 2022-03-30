// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MeuNomeSpace {
  export const nomeDoNamespace = 'Bruno';

  export class PessoaDoNomespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNomespace(nomeDoNamespace);
  console.log(pessoaDoNamespace);

  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Gustavo';
  }
}

const pessoaDoNamespace = new MeuNomeSpace.PessoaDoNomespace('outro nomespace');
console.log(pessoaDoNamespace);
