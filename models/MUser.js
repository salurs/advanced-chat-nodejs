const mongoose = require('mongoose');
const schema = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create');

const userSchema = new schema({
    'googleId':{
      type: String,
      unique: true
    },
    name: String,
    surname: String,
    profilePhotoUrl: String
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model('MUser', userSchema);
