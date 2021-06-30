module.exports = async function (fastify, options) {
    fastify.get('/', async function (request, reply) {
        return 'Hello from menu'
    })
}