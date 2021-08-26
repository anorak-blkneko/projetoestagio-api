const {Client} = require('pg')

const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {
        rejectUnauthorized: false
      }

    
})

client.connect();

client.query('select * from usuarios', (err, res)=>{
    if(!err)
    console.log(res.rows);
    else
    console.log(err.message);
    
    client.end;
})