import {Testimonial} from "../models/Testimoniales.js"


const guardarTestimonio = async (req, res) => {

    //validate
    const {nombre, email, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'})
    }

    if(email.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'})
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    if(errores.length > 0){
        //Consult existing testimonials
        const testimoniales = await Testimonial.findAll();

        //view with errors
        res.render('testimonials', {
            pagina: 'Testimonios',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        })
    }else{
        //save to database
        try{
            await Testimonial.create({
                nombre,
                correo: email,
                mensaje
            })
            res.redirect('/testimonials');
        }catch(error){

        }
        
    }
}

export {
    guardarTestimonio,

}