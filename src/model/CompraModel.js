const SessionController = require("../controller/SessionController");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();

class Compra extends Conexao {

    
    async compra(total,data_pedido,previsao,empresa_id_pedido,usuario_id_pedido,endereco_usuario_id_pedido,idusuario_pedidos,status,forma_pagamento) {
       
            
        const text = "insert into pedido(total,data_pedido,previsao,empresa_id_pedido,usuario_id_pedido,endereco_usuario_id_pedido,idusuario_pedidos,status,forma_pagamento)values($1," + "'"+data_pedido+"','"+previsao+"'" +",$2,$3,$4,$5,$6,$7) RETURNING idpedido"
        const values = [total,empresa_id_pedido,usuario_id_pedido,endereco_usuario_id_pedido,idusuario_pedidos,status,forma_pagamento]
        const client = await con.Open(text, values).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text, values)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
        
                resolve(valor)
                reject("Erro na promisse company");
            }, 1000)
        });
    }


    async Cadastra_pedido(valorItem, QtdeItem, IdProduto, IdPedido) {
            
        const text = "insert into item_pedido(valor_item,qtd,pedido_id_item,produto_id_item)values($1,$2,$3,$4)"
        const values = [valorItem,QtdeItem,IdPedido,IdProduto]
        const client = await con.Open(text, values).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text, values)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
          
                resolve(valor)
                reject("Erro na promisse company");
            }, 1000)
        });
    }
    async status_pedido(data_status,pedido_id_status) {
      
            
        const text = "insert into status_pedido (status_detalhe,data_status,pedido_id_status) values ('Entregue'," + "'" + data_status + "'" + ",$1)"
        const values = [pedido_id_status]
        const client = await con.Open(text, values).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text, values)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
              
                resolve(valor)
                reject("Erro na promisse company");
            }, 1000)
        });
    }
    async status_entregue(id_pedido) {

        const text = "select * from status_pedido where pedido_id_status = $1"
        const values = [id_pedido]
        const client = await con.Open(text, values).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text, values)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                
                resolve(valor)
                reject("Erro na promisse company");
            }, 1000)
        });
    }
   


}

module.exports = Compra


