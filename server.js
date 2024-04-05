const express=require('express');

const server=express();

server.get('/',(req,res)=>{
    res.send('<h1>Hello ExpressJS =D </h1>')
})

server.get('/sobre',(req,res)=>{
    res.send('<h1>Somos quem podemos ser =D </h1>')
})

server.get('/json',(req,res)=>{
    res.send({'nome':'Alceu'});
})

server.use((req,res)=>{
    // res.send("Erro");

    res.status(404).send("Erro");
})

server.listen(3000);