/*jshint esversion: 6 */

const shopgun = require('../shopgun.js');
const translate = require('../translate.js');
const server = require('../server.js');

// this example builds on JA's example1 by using runtime translation of query from English to Danish using JA's translate.js script.

shopgun.getToken().then(function(response) {
    const token = response.data.token;

    // search nearby offers
    shopgun.offerSearch(token, {
        query: translate("Apple"),
        r_lat: 55.7947,
        r_lon: 12.5162,
        r_radius: 500,
        r_locale: 'da_DK',
        limit: 5
       })
       .then(function (response) {
        response.data.map(item => {
            console.log(`item.id: ${item.ern}
                item.heading: ${item.heading}
                item.description: ${item.description}
                item.price: ${item.pricing.price}
            `)});
    }).catch(function (response) {
        console.log("error:", response);
        });
});