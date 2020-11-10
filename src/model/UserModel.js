const SessionController = require("../controller/SessionController");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();  

 class Banco_User extends Conexao{
    
    async login(email, senha) 
    {
        const text = "Select * from usuario where email = $1 and senha = $2"
        const values = [email,senha] 
        const client = await con.Open(text,values).catch(e => console.error("erro na query"))
                         
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
                  console.log(valor.rows)
                 resolve(valor)
                 reject("Erro na promisse login");
                },1000)
         });  
         
    }

    
    
  }  
 
  module.exports = Banco_User


