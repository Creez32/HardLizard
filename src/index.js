const homePage = require('./homePage')
const enCartelera = require('./enCartelera')
const contacto = require('./contacto')
const masVotadas = require('./masVotadas')
const preguntasFrecuentes = require('./preguntasFrecuentes')
const sucursales = require('./sucursales')



let movies = homePage.peliculas()
let cartelera = enCartelera.leerJSON()
let formula = masVotadas.promedio()
let pelis = masVotadas.totalPeliculas()
let pelisFiltradas = masVotadas.peliculasFiltradas()
let preguntas = preguntasFrecuentes.leerJSON()
let sucursal = sucursales.funcionArray()

module.exports = {
    homePage: function (req, res) {
        res.write("   ➤ Bienvenidos a DH Movies el mejor sitio para encontrar las mejores peliculas, incluso mucho mejor que Netflix, Cuevana y PopCorn")
        res.write(`\n\n\n\n`)
        res.write("   ⧐ Con un total de " + movies.length + ' peliculas')
        res.write('\n\n')
        movies.forEach(movie => {
            res.write('        ⦁ ' + movie + '\n\n')
        });
        res.write(`\n\n\n\n`)
        res.write(`   ⧐ Recorda que podes visitar las secciones :
        \n
        ⦁ En Cartelera'
        \n
        ⦁ Mas Votadas
        \n
        ⦁ Sucursales
        \n
        ⦁ Contacto
        \n
        ⦁ Preguntas Frecuentes
        \n\n`)
        res.end()
    },
    enCartelera: function (req, res) {
        res.write(`/*/*En Cartelera/*/* \n\n Total de Peliculas : ${movies.movies.length}\n\n`)
        cartelera.movies.forEach(movie => {
            res.write(` **${movie.title}** \n\n /${movie.overview}/\n\n`);
        });
        res.end()
    },
    contacto: function (req, res) {
        res.end(`Contacto ${contacto}`);
    },
    masVotadas: function (req, res) {
        res.end(`/*/* Mas Votadas /*/* \n\n **Total peliculas** ${pelis}  -Promedio- ${formula} \n\n ${pelisFiltradas}`);
    },
    sucursales: function (req, res) {
        res.write('Nuestras Salas');
        res.write('\n\n')
        res.write('Total de salas = 16 ')
        res.write('\n\n')
        res.write(" " + sucursal)
        res.end()
    },
    preguntasFrecuentes: function (req, res) {
        res.write('Preguntas Frecuentes');
        res.write('\n\n')
        res.write('Preguntas respondidas ' + preguntas.faqs.length)
        preguntas.faqs.forEach(preguntas => {
            res.write('\n\n')
            res.write("Título: " + preguntas.faq_title);
            res.write('\n\n')
            res.write("Rating: " + preguntas.faq_answer);
            res.write('\n\n')
        });
        res.end()
    }
}