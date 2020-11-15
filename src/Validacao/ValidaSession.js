const UserController = require("../controller/UserController")
const userController = new UserController()
const CompanyController = require("../controller/CompanyController")
const companyController = new CompanyController()
class Valida {

     async Valida_login(Email, Senha) {
          if (Email == "" || Senha == "") {
               return { "Erro": "Por favor informar Email e Senha #115790" }
          }

          else if (this.IsEmail(Email) & Senha != "") {
               return await userController.User_Login(Email, Senha)
          }
          else {
               return { "Erro": "Email ou senha estão incorreto #115789" }
          }
     }
     async Valida_login_empresa(Email, Senha) {
          if (Email == "" || Senha == "") {
               return { "Erro": "Por favor informar Email e Senha #115790" }
          }

          else if (this.IsEmail(Email) & Senha != "") {
               return await companyController.Company_Login(Email, Senha)
          }
          else {
               return { "Erro": "Email ou senha estão incorreto #115789" }
          }
     }
     IsEmail(email) {
          let exclude = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

          if (email.search(exclude)) { console.log("Email não é valido"); return false; } else { return true; }
     }

}

module.exports = Valida;