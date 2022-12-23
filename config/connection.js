
const {connect, mongoose} = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Weed', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

module.exports = mongoose.connect