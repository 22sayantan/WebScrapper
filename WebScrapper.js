const axios = require('axios');
const cheerio = require('cheerio');

// Define the URL :
const url = 'https://www.javatpoint.com/sql-tutorial'
const tag = 'title';

// Make an HTTP Get request to the url:
axios.get(url)
    .then((response) => {
        if(response.status === 200){
            //Load the HTML content into Cheerio
            const $ = cheerio.load(response.data);

            //Use CSS selectors to extract data:
            const h2 = $(`${tag}`).text();

            //Print the extracted data:
            console.log(h2);
        }else{
            console.error('Failed to fetch the web page');
        }
    });