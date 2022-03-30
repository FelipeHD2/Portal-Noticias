module.exports=function(app){//libera a exportação do conteúdo a seguir para o app.js que está na pasta raíz;

//rota para a página principal do app;
    app.get('/',function(req, res){//caso não fique nada digitado após localhost na url, será retornada:;
        res.render('home/index.ejs');
        //a renderização do ejs contendo a página principal, que está na pasta home dentro da pasta views, adentro da pasta app;
    });
};