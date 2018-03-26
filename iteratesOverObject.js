const person = {
  firstName: 'Cristina',
  secondName: 'Elizabeth',
  cellphone: 123456,
  city: 'USA',
};

var print = '';
for (var property in person) {
  print = print + ' ' + person[property];
}

console.log('Object Properties-->',print); // Object Properties-->  Cristina Elizabeth 123456 USA
