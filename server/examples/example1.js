/*jshint esversion: 6 */

const shopgun = require('../shopgun.js');
// this file illustrate the intended usage of the shopgun.js wrapper
//  You can use this to solve the task of integrating a product api in your app.
//
// NOTES:
//  - In a real implementation you would probably store the session token in a database table related to the user
//  - the shopgun API has danish data in the danish region. You will get more results by using danish queries.
let myres;

shopgun.getToken().then(function(response) {
    const token = response.data.token;

    // search nearby offers
    shopgun.offerSearch(token, {
        query:"æble",
        r_lat: 55.676098,
        r_lon: 12.568337
       })
       .then(function (response) {
        console.log("data:",response.data);
        // server.load("/offerSearch",(req,res)=>{
        //     res.send(response.data); 
        //     myres=response.data;
        //    });
    }).catch(function (response) {
       server.apps.express.loadData("/offerSearch", response.data ,"Error with Api !!");
        
        console.log("error:", response);
        });

    // get the location of the nearest stores for the dealer. (A dealer could e.g be "Rema 1000" or "Netto")
    shopgun.storeList(token, {
        r_lat: 55.676098,
        r_lon: 12.568337,
        dealer_ids: ['11deC']  // NOTE: you can find the dealer_id in the offerSearch result
    }).then(function(response) {
        console.log("data:", response.data);
    });

}).catch(function (err) {
  console.log("token error:", err.data);
});

module.exports = {
   myres,
};