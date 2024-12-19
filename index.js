import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express();

//Conect Database
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

//Define port
const port = process.env.PORT || 3000;

//enable pug
app.set('view engine', 'pug');

//Get current year
app.use((req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.siteName = "Agencia de Viajes"
    
    next();
})

//add body parser for form data read
app.use(express.urlencoded({extended: true}))

//define public file
app.use(express.static('public'))

//add router
app.use('/', router);

app.listen(port, "0.0.0.0", () => {
    console.log(`El servidor esta funcionando en el puerto  http://192.168.0.29:${port}`);
});