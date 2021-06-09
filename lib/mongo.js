const { MongoClient, ObjectId } = require('mongodb');
const {config} = require('../config/config');

const USER = config.DB_USER;
const PASSWORD = config.DB_PASSWORD;
const DB_NAME = config.DB_NAME;
const DB_HOST = config.DB_HOST;
const PORT = config.DB_PORT;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;


class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
        this.dbName = DB_NAME;
    }

    connect() {
        if (!MongoLib.connection){
            MongoLib.connection = new Promise ((resolve, reject) => {
                this.client.connect( err => {
                    if (err) {
                        reject("error en la conexión con la BBDD ", err);
                    }
                    console.log('Conectado a la BBDD');
                    resolve(this.client.db(this.dbName));
                })
            })
        }

        return MongoLib.connection;
    }


getTodo(collection, query) {
    return this.connect().then(db => {
        return db.collection(collection).find(query).toArray();
    })
}

getUnElemento(collection, id) {
    return this.connect().then(db => {
        return db.collection(collection).findOne({ _id: ObjectId(id) })
    })
}

anadirElemento(collection, data) {
    return this.connect().then(db => {
        return db.collection(collection).insertOne(data)
    }).then(result => result.insertedId);
}

borrarElemento(collection, id) {
    return this.connect().then(db => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) })

    }).then(() => id)
}

}
module.exports = MongoLib;
