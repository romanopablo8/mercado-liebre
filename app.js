const express = require('express');
const app = express();

app.use ('/static', express.static ( __dirname + '/public'));

const port = process.env.PORT || 3000

app.listen(port, ()=>{
  console.log('Servidor funcionando');
});

app.get ('/', (req,res)=>{
  res.sendFile (__dirname + '/views/home.html');
});

app.get ('/register', (req,res)=>{
  res.sendFile (__dirname + '/views/register.html');
});

app.get ('/login', (req,res)=>{
  res.sendFile (__dirname + '/views/login.html');
});

// const express = require ('express');
// const path = require ('path');
// const app = express();
// const port = 3000;
//
// app.get('/', (req, res) => {
//  res.sendFile ( path.resolve ('./views/home.html'));
//})
//
// app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`);
// })