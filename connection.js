const {Client} = require('pg')

const client = new Client({
    /*
    host: "localhost",
    user: "Augusto",
    port: 5432,
    password: "super4848",
    database: "tccdb"
    */

    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    /* host: "ec2-18-215-111-67.compute-1.amazonaws.com",
    user: "vpdtmdayrtmikb",
    port: 5432,
    password: "e4211d32f743fa950e3baad470adf6e17b732eb7b8ae326b9580f0110cdfaaa5",
    database: "ddiustcj3dftq6", */
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {
        rejectUnauthorized: false
      }
})

module.exports = client