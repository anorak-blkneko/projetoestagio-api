const http = require('http');
const app = require('./app');
const cors = require('cors');
const port = process.env.PORT || 3000; //vai
const server = http.createServer(app);
server.listen(port);


app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Header', 'Content-Type, Origin, X-Requested-With, Authorization, Accept');
    res.header('Access-Control-Allow-Credentials',  true);
    res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');

    /* if(req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    } */

    app.use(cors());
    next();
})

