module.exports=function(app){//libera a exportação do conteúdo a seguir para o app.js que está na pasta raíz;

//rota para a página do formulário de inclusão de notícias
    app.get('/formularioinclusaonoticia',function(req, res){//caso fique /formularioinclusaonoticia digitado após localhost na url, será retornada:;
        res.render('admin/form_add_noticia.ejs');
        //a renderização do ejs contendo a página de formulário de inclusão de notícias, que está na pasta admin dentro da pasta views, adentro da pasta app;
    });
};