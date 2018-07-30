// Object Destructuring

// const person = {
//     name: 'Derek',
//     age: 27,
//     location: {
//         city: 'Fallbrook',
//         temp: 70
//     }
// };

// const { name, age } = person;
// const { city, temp } = person.location;

// console.log(`${name} is ${age}`);
// if (city && !isNaN(temp)) {
//     console.log(`It's ${temp} degrees in ${city}`);
// }

// const book = {
//     title: 'East of Eden',
//     author: 'John Steinbeck',
//     publisher: {
//         name: 'Penguin',
//     }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(`${publisherName}`);

// Array Destructuring

const address = ['4781 Sleeping Indian Road', 'Fallbrook', 'California', '92028'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
