const MongoLib = require('../lib/mongo');

class ServicesCalendario{

    constructor(){
        this.collection = 'calendario';
        this.mongoDB = new MongoLib();
    }

    async getCalendario(){
        const calendario = await this.mongoDB.getTodo(this.collection);
        return calendario || [];
    }

   

    async anadirCalendario({calendario}){
        const calendarionueva = await this.mongoDB.anadirElemento(this.collection,calendario);
        return calendarionueva || [];
    }
}
 module.exports = ServicesCalendario;