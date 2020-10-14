
const Banco =  require("../model/UserModel");
const banco = new Banco(); 

class User{

   User_Login(Email,Pass)
   {
   const result = banco.login(Email,Pass)
                        .then(function(results){
                              return results.rows}) 
                        .catch((e) => {
                             return  {"teste":"Ocorreu um erro inesperado Codigo #115987"} 
                        })
      return result
 
   } 
   
}

module.exports = User