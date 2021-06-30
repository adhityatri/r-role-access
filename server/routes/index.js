'use strict'
const controller = require('../controllers')

function menu(fastify, options, done) {
    fastify.get('/', controller.menu.getMenus)

    done()
}

module.exports = menu