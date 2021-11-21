
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
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
