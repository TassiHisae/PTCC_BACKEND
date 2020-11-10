const { json } = require("express");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();  

class Banco_List extends Conexao {
           
    async List_Lojas(){

        const text = "Select * from empresa"
        const client = await con.Open(text)  

        if(!client){
            return erros.Client;
          }
        
          const valor = await client
          .query(text)
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
 
module.exports = Banco_List
