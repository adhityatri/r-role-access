
const Fastify = require('fastify')
const path = require('path')
const Autoload = require('fastify-autoload')
const fsequelize = require('fastify-sequelize')
require('dotenv').config()
const model = require('./models')

const fastify = Fastify()
const PORT = process.env.PORT || 3001

fastify.register(Autoload, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({ prefix: '/api' })
})

// sequelize config
const config = {
    instance: "sequelize",
    autoConnect: true,
    dialect: "mysql",
    database: "fastify",
    username: "root",
    password: null,
    host: "127.0.0.1",
    port: 3306
}

fastify.register(fsequelize, config).ready()


const start = async () => {
    try {
        await model.sequelize.sync().then(async function () {
            await fastify.listen(PORT, () => {
                console.log("> Listening on port : " + PORT)
            })
        })
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()