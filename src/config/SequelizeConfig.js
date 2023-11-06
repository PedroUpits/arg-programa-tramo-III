const {Sequelize} = require('sequelize');

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', 
});

const database = async () => {
try {
    await sequelize.aunthenticate();
    console.log('Conexion establecida con exito');

    return sequelize;
} catch (error) {
    console.error('Error:', error);

    return false;
}
}

module.exports = database;