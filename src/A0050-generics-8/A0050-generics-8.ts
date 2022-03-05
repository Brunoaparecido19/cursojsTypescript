// Tipo Record
export const object1: Record<string, string | number> = {
  name: 'Bruno',
  lastName: 'Aparecido',
  age: 21,
};

console.log(object1);

type PessoaProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};
// Required | deixa tudo requerido
export type PessoaRequired = Required<PessoaProtocol>;
// Partial | deixa tudo opicional
export type PessoaPartial = Partial<PessoaRequired>;
// Readonly | tudo fica imutavel
export type PessoaReadonly = Readonly<PessoaPartial>;
// Pick |
export type PessoaPick = Pick<PessoaRequired, 'name' | 'lastName'>;

export const object2: PessoaPartial = {
  name: 'Bruno2',
  lastName: 'Aparecido',
};
console.log(object2);

// Extract e Exclude
export type ABC = 'A' | 'B' | 'C';
export type CDE = 'C' | 'D' | 'E';

export type TipoExclude = Exclude<ABC, CDE>;
export type TipoExtrate = Extract<ABC, CDE>;

export type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};
export type AccountAPI = Pick<
  AccountMongo,
  Exclude<keyof AccountMongo, '_id'>
> & {
  id: string;
};

export const accountMongo: AccountMongo = {
  _id: 'asdasgafa90-99asd441as',
  name: 'Bruno',
  age: 21,
};

export function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const AccountAPI = mapAccount(accountMongo);
console.log('API:', '\n', AccountAPI);
