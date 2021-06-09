const MongoLib = require('../lib/mongo');

class ServicesRutinas{

    constructor(){
        this.collection = 'rutinas';
        this.mongoDB = new MongoLib();
    }

    async getRutinas({tags}){
        const query = tags;
        const rutinas = await this.mongoDB.getTodo(this.collection,query);
        return rutinas || [];
    }

    async getUnaRutina(rutinaID){
        const rutina = await this.mongoDB.getUnElemento(this.collection,rutinaID);
        return rutina || [];
    }

    async anadirRutina({rutina}){
        const rutinanueva = await this.mongoDB.anadirElemento(this.collection,rutina);
        return rutinanueva || [];
    }

    async borrarRutina(rutinaID){
        const borrarRutina = await this.mongoDB.borrarElemento(this.collection,rutinaID);
        return borrarRutina || [];
    }


}
module.exports = ServicesRutinas;