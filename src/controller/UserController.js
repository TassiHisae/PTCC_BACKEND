const Banco_User = require("../model/UserModel");
const banco_User = new Banco_User();

class User {
  User_Login(Email, Pass) {
    const result = banco_User
      .login(Email, Pass)
      .then(function (results) {
        return results.rows;
      })
      .catch((e) => {
        return { teste: "Ocorreu um erro inesperado Codigo #115987" };
      });
    return result
      .then((result) => {
        if (result[0].email == Email) {
          return result;
        } else {
          return { Login_Status: "invalido" };
        }
      })
      .catch((e) => {
        console.log(
          "Erro ao verificar login solicitado Tela UserController linha 15"
        );
        console.log(
          "---------------------------------------------------------------"
        );
        console.log(e);
        console.log(
          "---------------------------------------------------------------"
        );
        return { Erro: "Não localizado #115988" };
      });
  }

  Create_User(cpf, senha, email, nascimento, nome, telefone, celular) {
    console.log(cpf, senha, email, nascimento, nome, telefone, celular);
    const result = banco_User
      .Create_User(cpf, senha, email, nascimento, nome, telefone, celular)
      .then((result) => {
        return result;
      })
      .catch((e) => {
        return { teste: "Ocorreu um erro inesperado Codigo #115988" };
      });
    return result;
  }
  altera_usuario(id,nome,cpf, email,senha) {
    console.log(id,nome,cpf, email,senha);
    const result = banco_User
      .altera_usuario(id,nome,cpf, email,senha)
      .then((result) => {
        return result;
      })
      .catch((e) => {
        return { teste: "Ocorreu um erro inesperado Codigo #115988" };
      });
    return result;
  }
}

module.exports = User;
