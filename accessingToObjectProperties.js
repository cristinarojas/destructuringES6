// OLD WAY to subtract the object properties
const person = {
  firstName: 'Cristina',
  secondName: 'Elizabeth',
  cellphone: 123456,
  city: 'USA',
};

// We are accessing directly to the object properties
console.log('firstName --->', person.firstName); // Cristina
console.log('secondName --->', person.secondName); // Elizabeth
console.log('cellphone --->', person.cellphone); // 123456
console.log('city --->', person.city); // USA

// If we want to assing this properties to a variable
const first = person.firstName;
const second = person.secondName;
const cell = person.cellphone;
const city = person.city;

// We are accessing directly to the object properties
console.log('first --->', first); // Cristina
console.log('second --->', second); // Elizabeth
console.log('cell --->', cell); // 123456
console.log('city --->', city); // USA
