const SessionController = require("../controller/SessionController");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();

class Banco_Product extends Conexao {

    async last_product(id) {
        const text = "select max(idproduto) from produto where empresa_id_produto = $1"
        const values = [id]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse last_prod");
            }, 1000)
        });
    }

    async list_product(idempresa) {
        const text = "select *,to_char(produto.validade, 'dd/mm/yyyy'::text) AS validadedata from produto where empresa_id_produto = $1"
        const values = [idempresa]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse list_prod");
            }, 1000)
        });
    }

    async create(nome, validade, preco, empresa, marca, peso, descricao, um, foto) {
        const text = "insert into produto (nome,validade,valor,status,empresa_id_produto,marca,peso,descricao,unidade_medida,foto_principal) values('" +
            nome + "','" + validade + "','" + preco + "','disponível','" + empresa + "','"
            + marca + "','" + peso + "','" + descricao + "','" + um + "','" + foto + "')"
        const client = await con.Open(text).catch(e => console.error("erro na query"))
        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse create_prod");
            }, 1000)
        });

    }

    async create_category(categoria, produto, raca) {
        const text = "insert into categoria_produto (categoria_id_cat_prod,produto_id_cat_prod,raca_id_cat_prod) values('" +
            categoria + "','" + produto + "','" + raca + "')"
        const client = await con.Open(text).catch(e => console.error("erro na query"))
        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse create_prod");
            }, 1000)
        });

    }

    async update_category(categoria, produto, raca) {
        const text = "update categoria_produto set categoria_id_cat_prod = $1, raca_id_cat_prod = $2 where produto_id_cat_prod = $3"
        const values = [categoria, raca, produto]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse create_prod");
            }, 1000)
        });

    }

    async update(idprod, nome, validade, preco, empresa, marca, peso, descricao, um, status) {
        const text = "update produto set nome = $2, validade = $3, valor = $4, marca = $6, peso = $7, descricao = $8, unidade_medida = $9, status = $10 where empresa_id_produto = $5 and idproduto= $1"
        const values = [idprod, nome, validade, preco, empresa, marca, peso, descricao, um, status]
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
                reject("Erro na promisse update_prod");
            }, 1000)
        });
    }
    async update_photo(id, foto, idprod) {
        const text = "update produto set foto_principal = $1 where empresa_id_produto = $2 and idproduto = $3"
        const values = [foto, id, idprod]
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
                console.log(valor);
                resolve(valor)
                reject("Erro na promisse update_photo_prod");
            }, 1000)
        });
    }

    async category() {
        const text = "select * from categoria"
        const client = await con.Open(text).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse categoria");
            }, 1000)
        });
    }

    async category_current(idproduto) {
        const text = "select * from cat_prod_cad where produto_id_cat_prod = $1"
        const values = [idproduto]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse categoria");
            }, 1000)
        });
    }
    async species() {
        const text = "select * from especie"
        const client = await con.Open(text).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse categoria");
            }, 1000)
        });
    }
    async breed(id_species) {
        const text = "select * from raca where especie_id_raca = $1"
        const values = [id_species]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse categoria");
            }, 1000)
        });
    }

}

module.exports = Banco_Product