type Age = number;
type ColorRGB = 'Vermelho' | 'Verde' | 'Azul';
type ColorMYK = 'Magenta' | 'Amarelo' | 'Ciano' | 'Branco' | 'Preto';
type FavoriteColor = ColorRGB | ColorMYK;
type Person = {
  name: string;
  age: Age;
  favoriteNumber: number;
  favoriteColor?: FavoriteColor;
};

const person: Person = {
  name: 'Bruno',
  age: 21,
  favoriteNumber: 19,
};
export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}
console.log(setFavoriteColor(person, 'Preto'));
