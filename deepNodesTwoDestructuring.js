// We can print one node
// // We can acces to the properties like node: { node: { property, property }}
const cristina = {
  firstName: 'Cristina',
  lastName: 'Rojas',
  links: {
    social: {
      twitter: 'http://twittter.com/telecristy',
      facebook: 'telecristy'
    },
    web: {
      blog: 'Codejobs',
      youtube: 'Codejobs'
    }
  }
};

const { links, links: { social: {twitter, facebook} } } = cristina;

console.log('object', cristina);
console.log('links', links); //
console.log('twitter', twitter); //
console.log('facebook', facebook); //
