var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var bcrypt      = require('bcrypt-nodejs');

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    roles: String,
    major: String,
    rank: String,
    college: String,
    school: String,
    department: String,
    gender: String,
    userType: String,
    pid: String
});

//Hash the password before the sure is saved
UserSchema.pre('save', function(next) {
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

UserSchema.methods.comparePassword = function(password) {
    var user = this;

    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('Users', UserSchema);
