const express = require("express");
const multer = require('multer');
const storage = require('./config/upload')
const SpotController = require("./controller/SpotController");
const ValidaSession = require('./Validacao/ValidaSession');
const routes = express.Router();
const Valida = new ValidaSession();
const upload = multer({storage});



routes.post('/spots', upload.single('Foto_cadeado'),SpotController.store);

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