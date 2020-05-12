//definição dos serviços REST: criação dos serviços web (express)
// integração do mongo com o express
const BillingCycle = require('./billingCycle') 

BillingCycle.methods(['get', 'post', 'put', 'delete'])
// permite validação de campos required também na alteração
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]}) 
        } else {
            res.json({value})
        }
    })
})

module.exports = BillingCycle 