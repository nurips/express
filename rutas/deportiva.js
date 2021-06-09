
const express = require ('express');
const ServicioRutinas = require ('../services/servicesRutinas');
const ServicioCalendario = require('../services/servicesCalendario');

function AppDeportiva(app) {
    const router = express.Router();
    app.use('/api/deportiva',router);
    app.use(express.static('/dist/AppDeportiva'));
    
    const calendarioService = new ServicioCalendario();
    const rutinasService = new ServicioRutinas();
   

    router.get('/rutinas',async (req,res,next) =>{
        const tags = req.query;
        try{
            const rutinas = await rutinasService.getRutinas({tags});
            res.status(200).json({
                data:rutinas,
                message:'rutina recuperada'
            });
        }catch(err){
            next(err);
        }
    })

    router.get('/rutina/:rutinaId', async (req,res,next) => {
        const {rutinaId} = req.params;
        
        console.log(rutinaId);
        try{
            const rutina = await rutinasService.getUnaRutina(rutinaId);
            res.status(200).json({
                data:rutina
            });
        }catch(err){
            next(err);
        }
    })

  router.post('/rutina',async (req,res,next) =>{
      const {body : rutina} = req;
       console.log(rutina)
       try{
           const nuevaRutina = await rutinasService.anadirRutina({rutina});
           res.status(201).json({
                data:nuevaRutina,
           });
       }catch(err){
           next(err);
       }
  })

  router.delete('/rutina/:rutinaId', async (req,res,next) => {
    const {rutinaId} = req.params;
        
    console.log(rutinaId);
    try{
        const rutina = await rutinasService.borrarRutina(rutinaId);
        res.status(200).json({
            data:rutina
        });
    }catch(err){
        next(err);
    }
  })

  router.get('/calendario',async (req,res,next) => {
    const tags = req.query;
    try{
        const calendario = await calendarioService.getCalendario({tags});
        res.status(200).json({
            calendario:calendario,
            message:'rutina recuperada'
        });
    }catch(err){
        next(err);
    }
  })

 router.post('/calendario',async (req,res,next) => {
    const {body : calendario} = req;
    //console.log(rutina)
    try{
        const nuevacalendario = await calendarioService.anadirCalendario({calendario});
        res.status(201).json({
             data:calendario,
        });
    }catch(err){
        next(err);
    }
 })


}

module.exports = AppDeportiva;