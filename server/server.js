

const mysql = require('mysql');
const config = require("./../db/db.config");
const express = require("express");
const bodyParser = require("body-parser");
const shopgun = require('./shopgun.js');
const translate = require('./translate.js');



const connection = mysql.createConnection(config);
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());///parse application/json

// GET REQUESTS
app.get("/home", (req, res, next) => {
  let sqlQuery = 'SELECT * FROM tags';
  let query = connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);//middleware in express
    });
    // console.log(query.sql);
    // connection.end();
});

app.get("/:tag", (req, res, next) => {
let sqlQuery = "SELECT category_name, tag_name, water_consumption FROM categories_tags JOIN categories ON categories.category_id = categories_tags.category_id JOIN tags ON tags.tag_id = categories_tags.tag_id WHERE tag_name = ?";
let value = req.params.tag;
let query = connection.query(sqlQuery, value, function (error, results, fields) {
  if (error) throw error;
  console.log();
  res.json(results);
});
// console.log(query.sql);
// connection.end();
}); 


app.get('/:category/:product',(req,res)=>{
  const category =req.params.category;
  const product =req.params.product;


shopgun.getToken().then(function(response) {
    const token = response.data.token;
    // search nearby offers
    shopgun.offerSearch(token, {
      query: translate(product),
        r_lat: 55.676098,
        r_lon: 12.568337,
        r_locale: 'da_DK',
       })
       .then(function (response) {
        // console.log(response.data);
            res.send(response.data)     
        }).catch(function (response) {        
        console.log("error:", response);
        });
   // get the location of the nearest stores for the dealer. (A dealer could e.g be "Rema 1000" or "Netto")
    shopgun.storeList(token, {
        r_lat: 55.676098,
        r_lon: 12.568337,
        dealer_ids: ['11deC']  // NOTE: you can find the dealer_id in the offerSearch result
    }).then(function(response) {
        //  console.log("data:---------------------------", response.data);
                
    });

}).catch(function (err) {
  console.log("token error:", err.data);
}
);

})




app.listen(4000, function() {
  console.log("The server is listening on port 4000 ...");
});
     
module.exports = {
  app
};  

