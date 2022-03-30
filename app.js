const app=require('./config/server.js');//importa-se o conteúdo que foi exportado do server.js que está na pasta config;

const rotaHome=require('./app/routes/home')(app);
//importa-se o conteúdo exportado do arquivo home.js localizado na pasta routes que está na pasta app, e então, o executa;

const rotaAdmin=require('./app/routes/admin')(app);
//importa-se o conteúdo exportado do arquivo admin.js localizado na pasta routes que está na pasta app, e então, o executa;

const rotaNoticias=require('./app/routes/noticias')(app);
//importa-se o conteúdo exportado do arquivo noticias.js localizado na pasta routes que está na pasta app, e então, o executa;


app.listen('3000',function(){
console.log('Servidor rodando na porta 3000');
});//Cria um servidor rodando na porta 3000;