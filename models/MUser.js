const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    'googleId':{
      type: String,
      unique: true
    },
    name: String,
    surname: String,
    profilePhotoUrl: String
});

module.exports = mongoose.model('MUser', userSchema);
