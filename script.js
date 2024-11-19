'use strict';

// =====================scope================================
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//         var millenial = true;
//         const firstName = 'Steven';

//         const str = `Oh, and you're a millenial, ${firstName}`;
//         console.log(str);

//         output = 'NEW OUTPUT';
//         console.log(output);

//         function add(a,b){
//             return a + b;
//         }
//         let x = add(2,3);
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';

//========hoisting ===============


// console.log(me);


// var me = 'sam';
// let job = 'developer';
// const year = 1991;

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// if(!numProducts){
//   deleteShoppingCart();
// }
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

//=====this keyword ===========================

// var name = 'aravind';

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);



// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);


// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

//  jonas.calcAge();

// const matilda = {
//   year : 2017,
// }

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

// const f = jonas.calcAge;

// f();

// regular function and arrow function =====================================

// var firstName = 'aravind';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(startedIndex,mainIndex){

      return [this.starterMenu[startedIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, 
      close: 24,
    },
  },
};


// destructuring arrays ==================

// const arr = [1,2,3,4,5];
// const [x,y] = arr;

// console.log(x,y);

// let [main,secondary] = restaurant.categories;

// console.log(main,secondary);

// [main,secondary] = [secondary,main];

// let [starter,mainCourse] = restaurant.order(0,1);

// console.log(starter,mainCourse);


//========destructuring objects

// const {name,openingHours,categories} = restaurant;

// //console.log(name,openingHours,categories);

// console.log(categories);

// let [data1, ,data2] = categories;

// console.log(data1,data2);

// let {fri:friday,sat:saturday} = openingHours;

// console.log(friday);

// restaurant.orderDelivery({
//   time:'22:40',
//   address:'y street north',
//   mainIndex:2,
//   starterIndex:1
// });


// spread operator ==========================

// const arr = [7, 8, 9];

// const newArr = [1,2,...arr];

// console.log(newArr);

// console.log(...newArr);


// const newMenu = [...restaurant.mainMenu,'Biriyani'];

// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// console.log(mainMenuCopy)

// const menu = [...restaurant.mainMenu,...restaurant.starterMenu];

// const ingredients = ['jalapeno','pepper','tomato'];

// restaurant.orderPasta(...ingredients);

// rest =======================


// const arr = [1,2,...[3,4]];

// console.log(arr);

// const [a,b,...others] = [1,2,3,4,5,6];

// console.log(a,b,others)

// const [pizza, ,Risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];

// console.log(pizza,Risotto,otherFood)


// call apply =========================================

// const tata = {
//   airline: 'Indigo',
//   iataCode: 'IN',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    
//   },
// };


// tata.book(234,'akhil');
// tata.book(474,'urmila');

// console.log(tata.bookings)

// const reliance = {
//   airline: 'Air India',
//   iataCode: 'AIR',
//   bookings: [],
// };


// const book = tata.book;

// book.call(reliance,45,'aravind');
// book.call(reliance,434,'kicha');

// console.log(reliance.bookings);

// const virigin = {
//   airline: 'Vistara',
//   iataCode: 'VR',
//   bookings: [],
// }

// book.call(virigin,534,'alexander');
// book.call(virigin,678,'binu');

// ///////apply

// const flightData1 = [567,'midhu'];

// book.apply(virigin,flightData1);

// console.log(virigin.bookings);

// const flightData2 = [343,'amal'];

// book.call(virigin,...flightData2);


// ////// bind

// const bookTata = book.bind(reliance);

// bookTata(555,'megna');
// console.log(reliance.bookings)












