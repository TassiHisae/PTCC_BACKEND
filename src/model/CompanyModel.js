const SessionController = require("../controller/SessionController");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();

class Banco_Company extends Conexao {

    async login(email, senha) {
        const text = "Select * from empresa where email = $1 and senha = $2"
        const values = [email, senha]
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
                console.log(valor.rows)
                resolve(valor)
                reject("Erro na promisse login");
            }, 1000)
        });
    }

    async cadastro(nome, cnpj, email, senha, plano, celular, telefone, endereco, numero, cep, cidade, bairro, estado, complemento) {
        const text = "insert into empresa (nome,cnpj,email,senha,telefone,celular,endereco,numero,cep,complemento,plano_escolhido,cidade,bairro,estado) values('" +
            nome + "','" + cnpj + "','" + email + "','" + senha + "','" + telefone + "','"
            + celular + "','" + endereco + "','" + numero + "','" + cep + "','" + complemento
            + "','" + plano + "','" + cidade + "','" + bairro + "','" + estado + "')"
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
                reject("Erro na promisse cadastro");
            }, 1000)
        });

    }



}

module.exports = Banco_Company


