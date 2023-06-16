var express= require('express');
var  app =express();
app.get('/',(req,res)=>{
res.send('Welcome to Express.js');
});
app.listen(5000);
