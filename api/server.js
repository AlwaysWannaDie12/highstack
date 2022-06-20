const express = require('express');;
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.use(express.json());

let db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"highstack_db"
})



app.listen(4000, () => {
    console.log("running on port 4000");
})

app.post('/login',(req, res) => {
    const ldap = req.body.ldap;
    const password = req.body.password;

    let sql = "SELECT * FROM lu_user WHERE ldap_id = ? AND password = ?";
    let updateTime = "UPDATE lu_user SET last_login=NOW() WHERE ldap_id = ?";

    db.query(sql, [ldap,password],(error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        if(results){
            console.log(results);
            db.query(updateTime,[ldap], (error, result, field) => {
                if (error) {
                    return console.error(error.message);
                  }
            });
            res.send(results);
        }
        else{
            res.send({message:"Wrong Credentials"});
        }
      });
      


})



