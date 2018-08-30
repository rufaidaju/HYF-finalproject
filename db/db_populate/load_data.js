const mysql = require("mysql");
const config = require("./../db.config");
const { categoriesTable, tagsTable, categoriesTagsTable } = require("./prepare_data");

// console.log(categoriesTable);
// console.log(tagsTable);

const connection = mysql.createConnection(config);
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

// ================ QUERY FOR INSERTING DATA INTO CATEGORIES TABLE ============  

// let sqlQuery = 'INSERT INTO categories(category_id, category_name, quantity, measurement_unit, water_consumption) VALUES ?';
// let values = categoriesTable;  
// let query = connection.query(sqlQuery, [values], function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });

// ================ QUERY FOR INSERTING DATA INTO TAGS TABLE ============  

// let sqlQuery = 'INSERT INTO tags(tag_id, tag_name) VALUES ?';
// let values = tagsTable;
// let query = connection.query(sqlQuery, [values], function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });


// ================ QUERY FOR INSERTING DATA INTO CATEGORIES_TAGS TABLE ============  

// let sqlQuery = 'INSERT INTO categories_tags(category_id, tag_id) VALUES ?';
// let values = categoriesTagsTable;
// let query = connection.query(sqlQuery, [values], function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });

  console.log(query.sql);
  
  connection.end();