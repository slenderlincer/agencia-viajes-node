import { Viaje } from "../models/Viaje.js";
import {Testimonial} from "../models/Testimoniales.js"

const paginaInicio = async (req, res) =>{
    //Consult 3 travels from the model travel

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('dashboard', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    
        
    } catch (error) {
        console.log(error)
    }

}

const paginaNosotros = (req, res) =>{
    res.render('aboutUs', {
        pagina: 'Nosotros',
    });
}

const paginaViajes =  async (req, res) => {
        // Consult Database
        const viajes = await Viaje.findAll();  // Use await
        console.log(viajes)
        // Render view
        res.render('travels', {
            pagina: 'Proximos Viajes',
            viajes,
        });
}


const paginaTestimonio = async(req, res) => {

    try{
        const testimoniales = await Testimonial.findAll();
        res.render('testimonials', {
            pagina: 'Testimonios',
            testimoniales,
        });
        
    }catch(error){
        console.log(error)
    }
}

//Travels details view
const paginaDetalleViaje = async(req,res) => {
    
    const {slug} = req.params;

    try{
        const viaje = await Viaje.findOne({where : { slug: slug }});
        res.render('detailsTravel',{
            pagina: 'Informacion Viaje',
            viaje
        })
    }catch (error){
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonio,
    paginaDetalleViaje
}
