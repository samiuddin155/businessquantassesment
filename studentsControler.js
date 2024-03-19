//GET ALL DATA LIST 

const db = require("../config/db")

 const getStudents = async(req,res) => {
    try {
        const data = await db.query('SELECT ticker,date,revenue,gp FROM students WHERE ticker = "AAPL" AND date >="01/01/2019"')
        if(!data){
            return res.status(404).send({
                success:false,
                message:"No rexord found"
            })
        }
        res.status(200).send({
            success:true,
            message:"All data retrieved",
            totalCount: data[0].length,
            data: data[0],
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in fetching data',
            error
        })
    }
 }

 const getStudentszs = async(req,res) => {
    try {
        const data = await db.query('SELECT ticker,date,revenue,gp FROM students WHERE ticker = "ZS" AND date >="01/01/2019"')
        if(!data){
            return res.status(404).send({
                success:false,
                message:"No rexord found"
            })
        }
        res.status(200).send({
            success:true,
            message:"All data retrieved",
            totalCount: data[0].length,
            data: data[0],
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in fetching data',
            error
        })
    }
 }

 //GET AAPL DATA of 5years





 module.exports = {getStudents,getStudentszs}