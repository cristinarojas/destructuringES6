// We can acces to the properties node directly = object.node.node
// Then print the properties
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

const { twitter, facebook } = cristina.links.social;

console.log('twitter', twitter); // http://twittter.com/telecristy
console.log('facebook', facebook); // telecristy
