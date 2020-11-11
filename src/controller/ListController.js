
const Banco_List =  require("../model/ListModel");
const banco_List = new Banco_List(); 

class List{

   User_Login()
   {
   const result = banco_List.List_Lojas()
                        .then(function(results){
                                  return results
                        })
                        .catch((e) => {
                             return  {"teste":"Ocorreu um erro inesperado Codigo #115987"}
                        })
      return result
 
   } 
   
}

module.exports = List

const teste = new List()
teste.User_Login().then(results=>(console.log(results))) 