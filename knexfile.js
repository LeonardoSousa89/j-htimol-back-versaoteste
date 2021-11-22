
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'jh',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

 
  production: {
    client: 'postgresql',
    connection: {
      host:'ec2-52-20-143-167.compute-1.amazonaws.com',
      database: 'ddpm4taq194eid',
      user:     'qasiternfdowgj',
      password: 'd7d064af81366a2f258e792566f6925025c7bc7b2ee84e8e1dfd94ac3c9e3041'
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
