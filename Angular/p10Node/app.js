console.log('Hola america');

const http = require('http');
const port = 3001;

let equipos = [
    {nombre: 'Atlético de Madrid', localidad:'Madrid'},
    {nombre: 'F.C. Barcelona', localidad:'Barcelona'},
    {nombre: 'Real Madrid', localidad:'Madrid'}
]

http.createServer((req,res) =>{
    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});/*Con esto devolvemos un texto*/
            res.write('Hola Mundo desde el Servidor');
            break;
        case '/contacto':
            res.writeHead(200, {'Content-Type': 'text/plain'});/*Con esto devolvemos un texto*/
            res.write('Contacto');
            break; 
        case '/equipos':
            res.writeHead(200,{'Context-type':'application/json'});
            res.write(JSON.stringify(equipos));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});/*Con esto devolvemos un texto*/
            res.write('Página no encontrada');
            break;
    }
    //console.log(req.url);//indica la URL de la petición que estamos haciendo 
    res.end();
}).listen(port, () => {
    console.log('Servidor escuchando en http://localhost:' + port);
})