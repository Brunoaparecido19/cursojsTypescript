const arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumber);
async function promiseAsync() {
  return 1;
}

function myPromise() {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
