const Dab = require('../Models/Dab')

module.exports = {
    getDab(req, res) {
        Dab.find()
        .then((dab) => res.json(dab))
        .catch((err) => res.json(err));
    },
    getOneDab(req, res) {
        Dab.findOne({ name: req.params.name})
        .then((dab) => 
        !dab
        ? res.status(404).json({ message: 'no Dab with this Name'})
        : res.json(dab)
        )
        .catch((err) => res.status(500).json(err))
    },
    createDab(req, res) {
        Dab.create(req.body)
        .then((dab) => res.json(dab))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    deleteDab(req, res) {
        Dab.remove(req.body)
        .then((dab) => res.json(dab))
    }
}
