const index = require('./src/index')


module.exports = function(req,res){
    switch (req.url) {
        case '/':
            index.homePage(req,res)
            break;
        case '/en-cartelera':
            index.enCartelera(req,res)
            break;
        case '/contacto':
            index.contacto(req,res)
            break
        case '/masVotadas.js':
            index.masVotadas(req,res)
            break
        default:
            break;
    }
}
