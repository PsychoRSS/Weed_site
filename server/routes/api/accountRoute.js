const router = require('express').Router();
const {
    newUser,
    login,
    deleteUser
    
} = require('../../controllers/userController')

router.route('/').get(login)

module.exports = router;