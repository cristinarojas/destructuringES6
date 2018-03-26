// DESTRUCTURING NEW WAY to subtract the object properties
const person = {
  firstName: 'Cristina',
  secondName: 'Elizabeth',
  cellphone: 123456,
  city: 'USA',
};

// const { propertyOfTheObject, propertyOfTheObject } = object
const { firstName, secondName } = person; // Destructuring syntax

console.log('firstName --->', firstName); // firstName ---> Cristina
console.log('secondName --->', secondName); // secondName ---> Elizabeth
