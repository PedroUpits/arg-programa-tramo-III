const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./../SequelizeConfig.js');

const UsuarioModel = sequelizedefine('Usuario'),{
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
},
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    }

}


module.exports UsuarioModel; 