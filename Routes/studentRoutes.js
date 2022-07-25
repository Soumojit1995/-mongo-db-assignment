const express = require("express");
const studentModel = require("../Models/student");
const app = express();



app.post('/student/add', async (req, res) => {

    try {
        let response;
        let studentData = new studentModel({
            name: req.body.studentFirstName,
            collegeName: req.body.collegeName,
            location: req.body.location,
        })
        studentData.save();
        response = {
            'result': "Success"
        };
        res.send(response);

    } catch (err) {
        error = {
            'error': 'Unable to save'
        }
        res.status(500).send(error);
    }
});

app.get('/student/getStudentDetails', async (req, res) => {
    try {
        let response;
        let studentData = await studentModel.findOne({'name':req.query.name}).select({'name':1, 'collegeName':1,'location':1,'_id':0});
        console.log(studentData)
        if (studentData == null || studentData == undefined|| studentData == '') {
            response = {
                'result': "No Student found",
            };
            res.send(response);
        }else{
            res.send(studentData);
        }

    } catch (err) {
        error = {
            'error': 'Unable to connect'
        }
        res.status(500).send(error);
    }
});
app.get('/student/get-student', async (req, res) => {
    try {
        let response;
        let studentData = await studentModel.find({'name':req.query.name}).select({'name':1, 'collegeName':1,'location':1,'_id':0});
        console.log(studentData)
        if (studentData.length<=0){
            response = {
                'result': "No Student found",
            };
            res.send(response);
        }else{
            res.send(studentData);
        }

    } catch (err) {
        error = {
            'error': 'Unable to connect'
        }
        res.status(500).send(error);
    }
});
module.exports = app;