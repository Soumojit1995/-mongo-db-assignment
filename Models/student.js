const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    collegeName: {
        type: String
    },
    location: {
        type: String
    },

});

const StudentModel = mongoose.model('student', studentSchema);

module.exports = StudentModel;