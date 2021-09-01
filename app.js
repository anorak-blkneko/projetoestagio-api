const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const rotaUsuarios = require('./routes/usuarios');
const rotaCliente = require('./routes/cliente');
const rotaEmail = require('./routes/email');
const rotaEndereco = require('./routes/endereco');
const rotaFuncionario = require('./routes/funcionario');
const rotaOrcamento = require('./routes/orcamento');
const rotaPessoa = require('./routes/pessoa');
const rotaServico = require('./routes/servicos');
const rotaTelefone = require('./routes/telefone');

//app.use(bodyParser.urlencoded({extended: false})); 
//app.use(bodyParser.json()); 

app.use(express.json()) //JSON DE ENTRADA DO BODY
app.use(express.urlencoded({ extended: false})) //APENAS DADOS SIMPLES

//PERMIÇÃO DO CORS

app.use(cors());

/* 
app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Header', 'Content-Type, Origin, X-Requested-With, Authorization, Accept');
    res.header('Access-Control-Allow-Credentials',  true);
    res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');

    // if(req.method === 'OPTIONS'){
    //    res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
   //     return res.status(200).send({});
   // } 

    app.use(cors());
    next();
})

 */

app.use(morgan('dev'));

app.use('/usuarios', rotaUsuarios);
app.use('/cliente', rotaCliente);
app.use('/email', rotaEmail);
app.use('/endereco', rotaEndereco);
app.use('/funcionario', rotaFuncionario);
app.use('/orcamento', rotaOrcamento);
app.use('/pessoa', rotaPessoa);
app.use('/servico', rotaServico);
app.use('/telefone', rotaTelefone);




app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


module.exports = app;