type Name = { name: string };
type LastName = { lastName: string };
type Age = { age: number };
type Person = Name & LastName & Age; // Intersection type

const person: Person = {
  name: 'Bruno',
  lastName: 'Aparecido',
  age: 21,
};

console.log(person);
export { person };
