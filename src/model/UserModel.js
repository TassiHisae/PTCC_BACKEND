const SessionController = require("../controller/SessionController");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();

class Banco_User extends Conexao {

  async login(email, senha) {
    const text = "Select * from usuario where email = $1 and senha = $2"
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
        console.log(valor)
        resolve(valor)
        reject("Erro na promisse login");
      }, 1000)
    });

  }


  
  async Create_User(cpf,senha,email,nascimento,nome,telefone,celular){

    const text = "insert into usuario(cpf,senha,email,nascimento,nome,celular2,celular)values($1,$2,$3,$4,$5,$6,$7)"
    const values = [cpf,senha,email,nascimento,nome,telefone,celular] 
    const client = await con.Open(text,values)  

    if(!client){
        return erros.Client;
      }
    
      const valor = await client
      .query(text,values)
      .then(token => {return token})    
      .catch(e => console.error("Não foi possivel" + e.stack))
      .finally(() => con.End(client))           
     
      return new Promise(function(resolve,reject){
        setTimeout(function(){
        
         resolve(valor)
         reject("Erro na promisse login");
        },1000)
 });
}
  async altera_usuario(id,nome,cpf, email,senha){

    const text = "update usuario set nome = $2, cpf = $3,email = $4,senha = $5 where idusuario = $1"
    const values = [id,nome,cpf,email,senha] 

    const client = await con.Open(text,values)  

    if(!client){
        return erros.Client;
      }
    
      const valor = await client
      .query(text,values)
      .then(token => {return token})    
      .catch(e => console.error("Não foi possivel" + e.stack))
      .finally(() => con.End(client))           
     
      return new Promise(function(resolve,reject){
        setTimeout(function(){
        
         resolve(valor)
         reject("Erro na promisse login");
        },1000)
 });
}



}

module.exports = Banco_User


