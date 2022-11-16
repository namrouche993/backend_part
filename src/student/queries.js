const getAthletesquery = "SELECT * FROM gymath"
const getAthletesUp30 = "SELECT * FROM gymath where montant>1000"
const getAthletesUp50 = "SELECT * FROM gymath where montant>2000"
const checkNameExists = "SELECT s FROM gymath s WHERE s.name=$1"
//const addAthletequery = "INSERT INTO gymath (name,dob,dos,notes,montant) VALUES ($1, $2, $3, $4,$5)"
const addAthletequery = "INSERT INTO gymath (name,dob,dos,notes,montant) VALUES ($1, $2, $3, $4,$5)"

const removeathletequery = "DELETE from gymath where id=$1"
const updateAthletesquery = "UPDATE gymath SET name=$1 where id=$2"

//const getAthletesByid = "SELECT * FROM gymath where id = $1"


module.exports = {
    getAthletesquery,
    getAthletesUp30,
    getAthletesUp50,
    checkNameExists,
    addAthletequery,
    removeathletequery,
    updateAthletesquery
    //getAthletesByid
}