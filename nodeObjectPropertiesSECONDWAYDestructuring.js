// We can acces to the nodes like node: { node }
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

const { links: { social }, links: { web } } = cristina;

console.log('object', cristina);
console.log('links', social); // {twitter: "http://twittter.com/telecristy", facebook: "telecristy"}
console.log('web', web); // {blog: "Codejobs", youtube: "Codejobs"}
