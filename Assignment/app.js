
//Declare a function fullName and it print out your full name.
function fullName("Abigail Opuoru"){
    console.log("Abigail Opuoru");
}
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

fullName("Abigail Opuoru");
function fullName(firstName, lastName){
    return {$firstName,lastName};
}
const myFullName = fullName("Abigail", "Opuoru");
console.log(myFullName);
function addNumbers(a,b){
    return a + b;
}
// Declare a function addNumbers and it takes two two parameters and it returns sum.
addNumbers(num1, num2);
"Return the sum of two numbers"
return num1 + num2
const sum(addNumbers(5, 10))
console.log(sum); 15

// Higher Order Functions Assignment
const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
    'Finland', 'Germany', 'Hungary', 'IceLand', 'Ireland',
    'Japan', 'Kenya',
  ];
  const names = ['Tamara', 'Mathias', 'Elias', 'Brook'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  countries.forEach(Albania =>{
     console.log('Albania');
  });
  countries.forEach(Bolivia => {
    console,log('Bolivia');
  });
  countries,forEach(Canada =>{
     console.log('canada');
  })
  countries,forEach(Denmark =>{
    console.log('Denmark');
  });
  countries,forEach(Ethiopia =>{
     console.log('Ethiopia');
  });
  countries,forEach(Finland => {
    console.log('Finland');
  });
  countries,forEach(Germany =>{
     console.log('Germany');
  });
  countries,forEach(Hungary =>{
     console.log('Hungary');
  });
  countries,forEach(Iceland => {
    console.log('Iceland');
  });
  countries,forEach(Ireland =>{
     console.log('Ireland');
  });
  countries,forEach(Japan =>{
     console.log('Japan');
  });
  countries,forEach(Kenya =>{
     console.log('Kenya');
  });

  names.forEach(Tamara => {
    console.log('Tamara');
  });
  names.forEach(Mathias => {
    console.log('Mathias');
  });
  names.forEach(Elias =>{
     console.log('Elias');
  });
  names.forEach(Brook =>{
     console.log('Brook');
  });

  numbers.map(Number =>{
     console.log(1)
  });
  numbers.map(Number => {
    console.log(2);
  });
  numbers.map(Number => {
    console.log(3);
  });
  numbers.map(Number =>{
     console.log(4);
  });
  numbers.map(Number =>{
     console.log(5);
  });
  numbers.map(Number =>{
     console.log(6);
  });
  numbers.map(Number =>{
     console.log(7);
  });
  numbers.map(Number => {
    console.log(8);
  });
  numbers.map(Number => {
    console.log(9);
  });
  numbers.map(Number =>{
     console.log(10);
  });

  const upperCountries = countries.map(Albania => country.toUpperCase());
console.log(uppercaseCountries);
  

const countriesLengths = countries.map(country => country.length);
console.log(countriesLength);

const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);

const uppercaseNames = names.map(name => name.toUpperCase());
console.log(uppercaseNames);

const productPrices = products.map(product => product.price);
console.log(productPrices);

const countriesWithA = countries.filter(country => country.includes('a'));
console.log(countriesWithA);

constsixCharacterCountries = countries.filter(country => country.length === 6);
console.log(sixCharacterCountried);
const sixLettesrOrMoreCountries = countries.filter(country => country.length >=6);
console.log(sixLettersOrMoreCountries);

const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

const productWithPrices = products.filter(product => product.price !== '');
console.log(productWithPrices);

function
findCountriesByPatterns(pattern){
    return countries.filter(country => country.includes(pattern));
}

const dogPrint ={};
console.log(dogPrint);
dogPrint.name = "Buddy";
dogPrint.legs = 4;
dogPrint.color = "brown";
dogPrint.age = 5;

dogPrint.bark = function(){
    return Name:{$this.name}, Legs:{$this.legs}, Color:{$this.color}, Age: {$this.age}, Bark: Woof!;

};

console.log(dogPrint.bark());





