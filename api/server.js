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

app.get('/getProducts', (req, res) => {
    let prodQuery = "SELECT product_name FROM lu_products";

    db.query(prodQuery,(error, results, fields) => {
        if (error) {
            return console.error(error.message);
          }
        if(results){
            console.log(results);
            res.send(results);
        }
    })
})

app.post('/saveQuestion',(req,res) => {
    let saveQuestionQuery = "INSERT INTO `lu_questions`(`question_title`,`question_body`,`create_date`,`create_user_id`,tags,product) VALUES (?,?,NOW(),?,?,?);"
})

app.post('/getAllQuestions', (req,res) => {
    let questionQuery = "SELECT * FROM lu_questions ORDER BY views DESC";

   if(req.body.product!==""){
    const product = req.body.product;
    questionQuery = "SELECT * FROM lu_questions WHERE product =? ORDER BY views DESC";

    db.query(questionQuery,[product],(error, results, fields) => {
        if (error) {
            return console.error(error.message);
          }
        if(results){
            console.log(results);
            res.send(results);
        }
    })
   }
   else if(req.body.search!==""){
    const search = '%'+req.body.search+'%';
    questionQuery = "SELECT * FROM lu_questions WHERE (question_title LIKE ? OR question_body LIKE ?) ORDER BY views DESC;";

    db.query(questionQuery,[search,search],(error, results, fields) => {
        if (error) {
            return console.error(error.message);
          }
        if(results){
            console.log(search);
            res.send(results);
        }
    })
   }
   else{
    db.query(questionQuery,(error, results, fields) => {
        if (error) {
            return console.error(error.message);
          }
        if(results){
            console.log(results);
            res.send(results);
        }
    })
   }

    
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
            var user = (results[0].username);
            db.query(updateTime,[ldap], (error, result, field) => {
                if (error) {
                    return console.error(error.message);
                  }
            });
            res.send({message: user});
        }
        else{
            res.send({message:"Wrong Credentials"});
        }
      });
      


})



