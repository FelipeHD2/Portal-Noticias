const dbConnection = require ('../../config/dbConnection'); 
//volta-se 2 níveis de pastas e então é importado o dbConnection.js da pasta config;

module.exports=function(app){//libera a exportação do conteúdo a seguir para o app.js que está na pasta raíz;
    var connection=dbConnection();

    //rota para a página de notícia
    app.get('/noticias',function(req,res){//caso fique /noticias digitado após localhost na url, será retornada a renderização de noticias.ejs;
    const mysql=require('mysql'); //importação do módulo mySQL;

        connection.query('select * from noticias', function(error, result){
            if (error){
             console.log(error);//em caso de erro na execução, retornar error no console.log;
            }
            res.render('noticias/noticias.ejs',{noticias:result});
            //renderização da tela noticia.ejs passando a variável result;
        });
    });
};