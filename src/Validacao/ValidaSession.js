const UserController = require("../controller/UserController")
const userController = new UserController()
class Valida {
 
   async Valida_login(Email,Senha)
{
    
    if(this.IsEmail(Email) & Senha != "")
    {          
        
        return await userController.User_Login(Email,Senha)
       /*  return {"Err":"Email está correto"} */
    }
    else
    {
       /*  return {"Err":"Email está incorreto"} */
    }
}
    IsEmail(email){
    let exclude = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(email.search(exclude))
    {console.log("Email não é valido");return false;}else {return true;}
}

}

/*   const valida = new Valida()
console.log(valida.Valida_login("jonathan@hotmail.com",123)
.then(function(results){
    console.log(results.rows[0])
}))  */
 

module.exports = Valida;