 const Pool = require("pg").Pool;

  const pool = new Pool({
      user: "vachetghislain",
      password: "root",
      database: "ovya_recrutement",
      host: "localhost",
      port : 5432
  })

  module.exports = {
    query: (text, params) => {
        return pool.query(text, params)
    }
};