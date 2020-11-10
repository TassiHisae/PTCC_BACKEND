const ValidaSession = require('../Validacao/ValidaSession');
const Valida = new ValidaSession(); 
const ListController = require('../controller/ListController');
const listController = new ListController;

const express = require("express");
const routes = express.Router();

module.exports = {
 
 async  login(req,res){
    const {Email} = req.body
    const {Pass} = req.body
       
      Valida.Valida_login(Email,Pass).then(
        function(results){
            res.send(results)    
        }
    ) 
},

 async List_Lojas(req,res){
       listController.User_Login().then(
          results => res.send(results)
       )
 }

}

