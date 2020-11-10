const express = require("express");
const multer = require('multer');
const storage = require('./config/upload')
const imgController = require("./controller/imgController");
const routes = express.Router();
const upload = multer({storage});
const rotas = require('./Routes/routes')

routes.post('/Img', upload.single('Foto_cadeado'),imgController.store);

routes.post('/Login',async (req, res) => {rotas.login(req,res);});

routes.post('/List_Lojas',(req,res)=>{return rotas.List_Lojas(req,res);})

module.exports = routes;