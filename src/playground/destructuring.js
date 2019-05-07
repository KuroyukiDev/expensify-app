console.log('destructuring.js is running!');


//
// Object destructuring
//

// const person = {
//   name: 'Kurochan',
//   age: 27,
//   location: {
//     city: 'Shibuya-ku',
//     temp: 73
//   }
// };
//
// const { name: fName = 'Anonymous', age } = person;
// console.log(`${fName} is ${age}.`);
//
// const { city, temp: currentTemp } = person.location;
// if (city && typeof currentTemp === 'number') {
//   console.log(`It's ${currentTemp} in ${city} right now.`);
// }
//
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//
//   }
// };
//
// const { title, author } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`"${title}" by ${author}`);
// console.log(`publisher: ${publisherName}`);


// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ===================================================
// +++++++++++++++++++++++++++++++++++++++++++++++++++
//
// Array destructuring
//
//
// const address = ['1234 Gumdrop Ave', 'Gummy District', undefined, '54321'];
//
// const [, city, state = 'California',] = address;
//
// console.log(`You are in: ${city}, ${state}.`);

const item = ['Frappuccino', '$2.00', '$2.50', '$2.75'];
const [name, , med] = item;

console.log(`A Medium ${name} costs ${med}`);