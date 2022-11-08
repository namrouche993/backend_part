const getStudentsquery = "SELECT * FROM students"
const getStudentsUp30 = "SELECT * FROM students where age>30"
const getStudentsUp50 = "SELECT * FROM students where age>50"
const checkEmailExists = "SELECT s FROM students s WHERE s.email=$1"
const addStudentquery = "INSERT INTO students (name,email,age,dob) VALUES ($1, $2, $3, $4)"
const removestudentquery = "DELETE from students where id=$1"


//const getStudentsByid = "SELECT * FROM students where id = $1"


module.exports = {
    getStudentsquery,
    getStudentsUp30,
    getStudentsUp50,
    checkEmailExists,
    addStudentquery,
    removestudentquery
    //getStudentsByid
}