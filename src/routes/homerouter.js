const express = require('express'); 
const homeRouter = express.Router();

homeRouter.get('/',function(req,res){
    // console.log(process.env.dBURI);
    res.render('home',{});
    
})







module.exports = homeRouter;