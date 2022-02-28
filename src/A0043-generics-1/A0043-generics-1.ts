type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function meuFilter<T>(array: T[], calbackfn: FilterCallback<T>): T[] {
  const novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (calbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

const arrayFiltradoOriginal = array.filter((valor) => valor <= 5);
console.log(arrayFiltradoOriginal);

const meuArrayFiltrado = meuFilter(array, (valor) => valor <= 5);
console.log(meuArrayFiltrado);
