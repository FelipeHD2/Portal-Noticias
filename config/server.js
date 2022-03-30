const express=require('express');//Importação do express;
const app=express();//Execução do express;
app.set('view-engine','ejs');//configuração do ejs como motor de telas;
app.set('views','./app/views');//alteração do diretório da pasta views;

module.exports=app;//Possibilitamos a exportação da variavél app para o arquivo que for importá-la;