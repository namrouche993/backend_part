const getStudentsquery = "SELECT * FROM students"
const getStudentsUp30 = "SELECT * FROM students where age>30"
const getStudentsUp50 = "SELECT * FROM students where age>50"

//const getStudentsByid = "SELECT * FROM students where id = $1"


module.exports = {
    getStudentsquery,
    getStudentsUp30,
    getStudentsUp50
    //getStudentsByid
}