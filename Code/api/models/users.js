var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var bcrypt      = require('bcrypt-nodejs');

var UsersSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password:  {type: String, required: true},
    passwordConf:  {type: String, required: true},
    email: {type: String, required: true, index: {unique:true}},
    googleKey: String,
    userType: {type: String, required: true},
    rank: {type: String, required: true},
    pantherID: String,
    gender: {type: String, required: true},
    project:    String,
    piApproval: Boolean,
    piDenial: Boolean,
    verifiedEmail: Boolean,
    college:{type: String, required: true},
    department:{type: String, required: true}


});

//Hash the password before the sure is saved
UsersSchema.pre('save', function(next) {
    var user = this;

    //Hash the password only if the password has been changed or user is new
    if (!user.isModified('password')) return next();

    //Generate the hash
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err)
            return next(err);

        user.password = hash;
        next();
    });
});

// NEED TO HASH CONFIRM PASSWORD!!!! - TMOORE

UsersSchema.methods.comparePassword = function(password) {
    var user = this;
    
    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('Users', UsersSchema);
