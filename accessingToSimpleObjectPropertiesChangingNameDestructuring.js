// DESTRUCTURING NEW WAY to subtract the object properties
const person = {
  firstName: 'Cristina',
  secondName: 'Elizabeth',
  cellphone: 123456,
  city: 'USA',
};

// const { propertyOfTheObject: newVariableName, propertyOfTheObject: newVariableName } = object
const { firstName: first, secondName: second } = person; // Destructuring syntax

console.log('first --->', first); // first ---> Cristina
console.log('second --->', second); // second ---> Elizabeth
