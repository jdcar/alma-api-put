// const fetch = require('node-fetch')
const axios = require('axios').default;
const config = require('./config.js')
const productionKey = config.PRODUCTION_API_KEY;
const sandboxKey = config.SANDBOX_API_KEY;

// The bib record needs to be in MARC xml. You also need to wrap it in a <bib> tag and delete the header "<?xml version="1.0" encoding="UTF-16"?>"
// The XML sample at the bottom of the page here https://developers.exlibrisgroup.com/alma/apis/docs/xsd/rest_bib.xsd/?tags=PUT is the formatting to follow. The XML can be all on 1 line.

//Replace MARCXML_BIB_RECORD with the updated bib in MARCXML. You have to update the entire bib record while doing a PUT request.
let marc = 'MARCXML_BIB_RECORD'

// Replace MMS ID with the id from your system
let mmsid = 'MMS ID'

// console.log(marc)

var config = {
    headers: {
        'Content-Type': 'application/xml'

    }
};

//Switch to the production key in your config.js file by changing sandboxKey to productionKey
axios.put(`https://api-na.hosted.exlibrisgroup.com/almaws/v1/bibs/${mmsid}?apikey=${sandboxKey}`, marc, config)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })
