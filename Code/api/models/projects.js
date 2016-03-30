var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var ProjectSchema = new Schema({
    shortName: String,
    longName: String,
    disciplines: [String],
    goals: String,
    keyElements: String,
    researchIssues: String,
    meetingTime: Date,
    advisors: [{name: String, school: String}],
    sponsors: [{name: String, detail: String}],
    majPrepInt: [String],
    contact: [{name: String, phone: String, email: String, office: String}],
    status: String
});

module.exports = mongoose.model('Projects', ProjectsSchema);
