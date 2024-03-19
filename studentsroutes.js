const express = require('express');
const { getStudents,  getStudentszs } = require('../controllers/studentsControler');

//router object
const router = express.Router()

//routes 



//Get ALL DATA 
router.get('/getall',getStudents)
router.get('/getazs',getStudentszs)


module.exports = router