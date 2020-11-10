
const Banco_User =  require("../model/UserModel");
const banco_User = new Banco_User(); 

class User{

   User_Login(Email,Pass)
   {
   const result = banco_User.login(Email,Pass)
                        .then(function(results){
                              return results.rows}) 
                        .catch((e) => {
                             return  {"teste":"Ocorreu um erro inesperado Codigo #115987"} 
                        })
      return result.then((result) => {
       if(result[0].email == Email){
          return result
       }else{
          return {"Login_Status":"invalido"}
       }
      
    }).catch(e => {
       console.log("Erro ao verificar login solicitado Tela UserController linha 15")
       console.log("---------------------------------------------------------------")
       console.log(e)
       console.log("---------------------------------------------------------------")
       return {"Erro":"Não localizado #115988"}
    })
     
      
   
}
}

module.exports = User

/* const teste = new User()

teste.User_Login("sophiegiovannaclariceramos@gamil.com","d21Ym3tGse")
 .then(results=>console.log(Object.keys(results[0])[0]))  */