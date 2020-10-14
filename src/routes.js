const express = require("express");
const multer = require('multer');
const storage = require('./config/upload')
const imgController = require("./controller/imgController");
const ValidaSession = require('./Validacao/ValidaSession');
const routes = express.Router();
const Valida = new ValidaSession();
const upload = multer({storage});



routes.post('/Img', upload.single('Foto_cadeado'),imgController.store);

 routes.post('/Login',async (req, res) => {
    const {Email} = req.body
    const {Pass} = req.body

   

   /*   res.send(Valida.Valida_login(Email,Pass))  */
     
      Valida.Valida_login(Email,Pass).then(
        function(results){
            res.send(results)    
        }
    )    
});




module.exports = routes;