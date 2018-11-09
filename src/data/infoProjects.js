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
        code:'https://github.com/MirEnovi/cdmx-2018-06-bc-core-am-cipher',
        info:'Web app que cifra un mensaje para que solo la persona que tenga una clave numérica pueda decifrar y leer el mensaje original',
        image: cipher
    },
    {
        title: 'Data Dashboard',
        link: 'https://mirenovi.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/',
        code:'https://github.com/MirEnovi/cdmx-2018-06-bc-core-am-data-dashboard',
        info:'Web app creada para la fácil consulta de información sobre las estudiantes del Bootcamp de Laboratoria. Usuario: admin Contraseña:123admin',
        image: data
    },
    {
        title: 'Food Map',
        link: 'https://mirenovi.github.io/cdmx-2018-06-bc-core-pm-foodmap/src/',
        code:'https://github.com/MirEnovi/cdmx-2018-06-bc-core-pm-foodmap',
        info:'Web app que hace una búsqueda de los restaurantes que se encuentran cerca de ti',
        image: foodmap
    },
    {
        title: 'Recepción',
        link: 'https://mirenovi.github.io/Registro-de-Visitantes/src/',
        code:'https://github.com/MirEnovi/Registro-de-Visitantes',
        info:'Web app que agiliza el registro de visitantes de un Coworking, a través de una tablet',
        image: registro
    },
    {
        title: 'B-pay/Movil',
        link: 'https://mirenovi.github.io/BBVAHack/responsive-web/public/first-view.html',
        code:'https://github.com/MirEnovi/BBVAHack',
        info:'Web app creada para añadir al flujo de la app de Bancomer Movil, un metodo de pagos a través de codigos QR. Proyecto realizado en Hackathon BBVA 2018',
        image: bpay
    },
    {
        title: 'Api Movie',
        link: 'https://mirenovi.github.io/cdmx20181-Track-FE-themovieapi/src/login.html',
        code: 'https://github.com/MirEnovi/cdmx20181-Track-FE-themovieapi',
        info:'Este blog personal tiene el objetivo de mostrar la información de la una película. Cuenta con un login en Firebase pensando en una futura funcionalidad de guardar favoritos',
        image: amovie
    },
    {
        title: 'Markdown Links',
        link: 'https://github.com/MirEnovi/cdmx-2018-01-FE-markdown',
        code: 'https://github.com/MirEnovi/cdmx-2018-01-FE-markdown',
        info:' Libreria de NodeJS que busca entre los links de archivos con extensión  md, e identifica las url activas y aquellas que retornan error',
        image: mdl
    },
    {
        title: 'Burger Queen',
        link: 'https://mirenovi.github.io/cdmx-2018-06-bc-core-am-burger-queen/',
        code: 'https://github.com/MirEnovi/cdmx-2018-06-bc-core-am-burger-queen',
        info:'Web App que permite al cajero de un restaurante de comida rápida, tomar los pedidos en una tablet, y desde ahí enviarlos a cocina. Usuario: user@email.com, Contraseña: 123456',
        image: burger
    },
]