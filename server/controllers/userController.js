    const {Account} = require('../Models')

    module.exports = {
        newUser (req, res) {
            Account.create((req.body))
        },
        login (req, res) {
            Account.findById({ _id: req.params.accountid })
            .then((account) => 
                 !account
                 ?res.status(404).json({ message: 'no flower with that ID'})
                 : res.json(account)
                 )
                 .catch((err) => res.status(500).json(err))
        },
        deleteUser (req, res) {
            Account.deleteOne({_id: req.params.userid})
            .then((user) =>
            !user
            ?res.status(404).json({message: 'No flower With that ID'})
            :res.json(user))
            .catch((err) => { 
                console.log(err);
              return res.status(500).json(err)
            })
        }
    }