// condicional recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// no-null-assertion (!) não recomendado
const body2 = document.querySelector('body')!;
body2.style.backgroundColor = 'red';

// type-assertion (as) recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'red';

// HTMLElement (as) recomendado
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Hello World';
