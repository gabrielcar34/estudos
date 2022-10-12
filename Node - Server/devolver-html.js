const http = require("http");

`

    Req - Informações do Client para o servidor.

    Res - Informações do Servidor para o client.

`;

http.createServer((req, res) => {

    res.writeHead(200, { // Configurar um cabeçalhor (header);
        "Content-type": "text/html"
    });


    res.end("<h1> Olá mundo </h1>"); //  Enviar mensagem do servidor para o client


}).listen(3000);