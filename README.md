# Alma API PUT request [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [License](#license)
* [Questions](#questions)
## Description
This is a very basic program for making a PUT request to update the MARC bibliographic record using the ALMA API in node with axios. The bibliographic record is in MARCXML.

A repo for doing GET requests is here: https://github.com/jdcar/alma-api-get

## Installation Instructions
Clone down the repository, cd into the api-api-put folder, and "npm install" to get the dependencies. 

Add the mmsid from your database that you want to update.

You will need Alma API keys from your institution in order to use the APIs. I hide the keys in a file called "config.js".

In the alma-api-put folder, create a 'config.js' file. 

Add this with your API keys in quotes:

module.exports = config = {
    PRODUCTION_API_KEY : 'ENTER_PRODUCTION_KEY_HERE',
    SANDBOX_API_KEY : 'ENTER_SANDBOX_KEY_HERE',
  }

In order to do a PUT request you need to add back the entire MARCXML bib record. I do this by first doing a GET request to get the whole bib in MARCXML, then change the tags that I want to update, then PUT it back into ALMA. Instructions for GET requests are here: https://github.com/jdcar/alma-api-get 


Run with "node index.js"

## License
MIT. Copyright (c) 2021 Jamie Carlstone
## Questions
* https://github.com/jdcar
* Email: jamie.carlstone at northwestern.edu