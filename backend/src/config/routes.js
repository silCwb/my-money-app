const express = require('express')

module.exports = function(server) {
//Defniição da URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)
// Rotas dos ciclos de pagamento
    const billingCycle = require('../api/billingCycle/billingCycleService')
    billingCycle.register(router, '/billingCycles')

}