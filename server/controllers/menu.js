const { v4: uuidv4 } = require('uuid')
const db = require('../models')

const getMenus = async (req, reply) => {
    try {
        let menu = await db.menu.findAll();
        reply.status(200).send({ message: "Response dari constroller", data: menu })
    } catch (error) {
        reply.status(404).send({ message: error.message })
    }
}

module.exports = {
    getMenus
}