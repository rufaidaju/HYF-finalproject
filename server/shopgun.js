/*jshint esversion: 6 */
require('dotenv').config();

/*
 A NodeJS wrapper for the Shopgun API.
 NOTE: You will need a shopgun account a .env settings file for this to work (read more here : http://docs.api.etilbudsavis.dk/ )
 Your .env file should expose the following:
 API_KEY=
 API_SECRET=
 Your .env file could be called .env . You can test your Shopgun account works by running:
 node examples/example1.js
 if it works, then you should see a json data result in the console.
 If it says:
 "token error: undefined"
 then you probably need to setup your .env file
 JK NOTE: you have to make sure that your .env file is placed in the root directory from where you are running the Node commands. If .env is nested in another directory, then you will still get the "token error: undefined" message.
 As allways you can ask questions on the Hackyour Future CPH slack channel. Have fun! :)
 */

const axios = require('axios');
const crypto = require('crypto');

const api = 'https://api.etilbudsavis.dk/v2';

// use this to search for nearby products
function offerSearch (token, params) {
    const offerSearchEndpoint = `${api}/offers/search`;
    return axios.get(offerSearchEndpoint, {
        params: params,
        headers: getHeaders(token)
    });
}

// use this to find the nearby store. search using "dealer_ids" from the offerSearch result
function storeList (token, params) {
    const storeListEndpoint = `${api}/stores`;
    return axios.get(storeListEndpoint, {
        params: params,
        headers: getHeaders(token)
    });
}

function getHeaders (token) {
    const secret = process.env.API_SECRET;
    const signature = crypto.createHash('sha256').update(secret+token).digest('hex');
    return {'X-Token': token, 'X-Signature': signature };
}

function getToken () {
    const sessionEndpoint = `${api}/sessions`;
    return axios.post(sessionEndpoint, {
        api_key: process.env.API_KEY
    });
}

module.exports = {
    getToken,
    offerSearch,
    storeList
};