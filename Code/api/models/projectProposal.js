var mongoose = require('mongoose');
var schema = mongoose.Schema;
var shortId = require('shortid');

var project = new mongoose.Schema({
    _id: {type: String, index: {unique: true}, default: shortid.generate()},
    title: String,
    description: String,
    disciplines: [],
    firstSemester: Number,
    maxStudents: Number,
})

module.exports = mongoose.model('ProjectProposals', ProjectProposal);