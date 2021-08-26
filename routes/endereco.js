const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//RETORNA TODOS OS ENDEREÇOS
router.get('/', (req, res, next) =>{

    client.query(`Select * from endereco`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O ENDEREÇO NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from endereco where id_endereco=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM ENDEREÇO
router.post('/', (req, res, next) =>{
    
    const enderecos = req.body;
    let insertQuery = `insert into endereco ( "id_endereco", "id_pessoa", "uf", "complemento", "logradouro", "cep", "numero") 
                       values(${enderecos.idendereco}, ${enderecos.idpessoa}, '${enderecos.uf}',  '${enderecos.complemento}', '${enderecos.logradouro}', ${enderecos.cep}, ${enderecos.numero})`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message), console.log(enderecos.logradouro)}
    })
    client.end;

});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update endereco set
                       id_endereco = '${user.idendereco}',
                       id_pessoa = '${user.idpessoa}',
                       uf = '${user.uf}',
                       complemento = '${user.complemento}',
                       logradouro = '${user.logradouro}',
                       cep = '${user.cep}',
                       numero = '${user.numero}',
                       where id_endereco = ${req.params.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});

//DELETA
router.delete('/:id', (req, res, next) =>{
    
    let insertQuery = `delete from endereco where id_endereco=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
