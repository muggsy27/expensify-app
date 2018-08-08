const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('this is my resolved data');
    reject('error');
  }, 3000);
});

console.log('before');

promise
  .then(data => console.log(data, '1'))
  .catch(error => console.log('error', error));

console.log('after');