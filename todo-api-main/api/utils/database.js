//destructuramos la clase Sequalize
const {Sequelize} = require('sequelize')

const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

//imprimir para saber si se estan pasando los datos por dotenv
console.log(process.env.DB_HOST);

//crear instancia
const sequelize = new Sequelize({
   host: process.env.DB_HOST,
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   port: 5432,
   database: process.env.DB,
   dialect: 'postgres',
})

module.exports = {sequelize};