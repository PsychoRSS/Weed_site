    const {Account} = require('../Models')

    module.exports = {
        newUser (req, res) {
            Account.create((req.body))
        },
    }