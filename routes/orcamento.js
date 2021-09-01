const express = require('express');
const router = express.Router();
const client = require('../connection');

client.connect();

//RETORNA TODOS OS ORÇAMENTOS
router.get('/', (req, res, next) =>{

    client.query(`Select * from orcamento`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//RETORNA O ORCAMENTO NO ID
router.get('/:id', (req, res, next) =>{

    client.query(`Select * from orcamento where id_orcamento=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;

});

//INSERI UM ORCAMENTO
router.post('/', (req, res, next) =>{
    
    const orcamentos = req.body;
    let insertQuery = `insert into orcamento ("id_cliente", "id_funcionario", "id_servico", "data_criacao", "data_entrega", "valor", "status_andamento") 
                       values(${orcamentos.idcliente}, ${orcamentos.idfuncionario}, ${orcamentos.idservico}, ${orcamentos.datacri}, ${orcamentos.dataent}, ${orcamentos.valor}, '${orcamentos.statusand}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message)}
    })
    client.end;

});

//ALTERA 
router.patch('/:id', (req, res, next) =>{
    
    let user = req.body;
    let updateQuery = `update orcamento set
                       id_cliente = '${user.idcliente}',
                       id_funcionario = '${user.idfuncionario}',
                       id_servico = '${user.idservico}',
                       data_criacao = '${user.datacri}',
                       data_entrega = '${user.dataent}',
                       valor = '${user.valor}',
                       status_andamento = '${user.statusand}'
                       where id_orcamento = ${req.params.id}`

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
    
    let insertQuery = `delete from orcamento where id_orcamento=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;

});


module.exports = router;
