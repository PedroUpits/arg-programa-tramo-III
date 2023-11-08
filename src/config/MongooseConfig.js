import mongoose from 'mongoose';

const MONGO_DB_URI = process.env.MONGO_DB_URI;

const conectarMongo = async ()=> {
    try {
        await mongoose.cennect(MONGO_DB_URI);
        console.log('Exito');
    } catch (error) {
        console.log('Error: ', error);
    }
}

module.exports = conectarMongo; 