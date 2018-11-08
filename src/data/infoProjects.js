import cipher from '../components/assets/cipher.png';
import data from '../components/assets/DataDashboard.png';
import foodmap from '../components/assets/foodmap.png';
import registro from '../components/assets/Registro.png';
import bpay from '../components/assets/Bpay.png';
import amovie from '../components/assets/ApiMovie.png';
import mdl from '../components/assets/mdl.png';
import burger from '../components/assets/burger.png';

export default [
    {
        title: 'My Little Secret',
        link: 'https://mirenovi.github.io/cdmx-2018-06-bc-core-am-cipher/src/index.html',
        info:'Web app que cifra un mensaje para que solo la persona que tenga una clave numérica pueda decifrar y leer el mensaje original',
        image: cipher
    },
    {
        title: 'Data Dashboard',
        link: 'https://mirenovi.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/',
        info:'Web app creada para la fácil consulta de información sobre las estudiantes del Bootcamp de Laboratoria. Usuario: admin Contraseña:123admin',
        image: data
    },
    {
        title: 'Food Map',
        link: 'https://mirenovi.github.io/cdmx-2018-06-bc-core-pm-foodmap/src/',
        info:'Web app que hace una búsqueda de los restaurantes que se encuentran cerca de ti',
        image: foodmap
    },
    {
        title: 'Registro de Visitas',
        link: 'https://mirenovi.github.io/Registro-de-Visitantes/src/',
        info:'Web app que ayuda al registro de visitantes de un Coworking',
        image: registro
    },
    {
        title: 'B-pay/Mobil',
        link: 'https://mirenovi.github.io/BBVAHack/responsive-web/public/first-view.html',
        info:'Web app, pensada en los usuarios que manejan telefonos de baja gama,en los cuales su telefono no soporta la aplicacion nativa pero se ha pensado en la inclusion permitiendoles acceder desde cual buscador web. Hackathon BBVA 2018',
        image: bpay
    },
    {
        title: 'Api Movie',
        link: 'https://mirenovi.github.io/cdmx20181-Track-FE-themovieapi/src/login.html',
        info:'Este blog personal tiene el objetivo de mostrar una seriede tarjetas de peliculas. Si se quere saber un poco mas sobre ella, se presiona el poster y en un modal se puede leer más información de la misma',
        image: amovie
    },
    {
        title: 'Markdown Links',
        link: 'https://github.com/MirEnovi/cdmx-2018-01-FE-markdown',
        info:' Libreria de NodeJS para buscar entre los links de de un archivo *.md, a aquellas urls que aun estan activas y aquellas que retornan error',
        image: mdl
    },
    {
        title: 'Burger Queen',
        link: 'https://mirenovi.github.io/cdmx-2018-06-bc-core-am-burger-queen/',
        info:'Web App que permite a lxs cajerxs de un restaurante de hamburguesas, tomar los pedidos en una tablet, y desde ahí se puedan enviar a cocina. User: user@email.com, password: 123456',
        image: burger
    },
]