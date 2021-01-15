
//const inquirer = require("inquirer");
const axios = require("axios");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const csv = require('csv-parser');



const row = ""
fs.createReadStream('test1.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });


//main page, takes all user data and render just if user logged in
function call(){
    
}
router.post("/api/get-data", (req, res) =>{
    const movie = req.body.movie_title
    const queryUrl = `https://api.algopix.com/v3/multiItemsSearch?&keywords=Flutter_False_Eyelashes&color=blue&brand=Sugarpill&googleGbCategoryId=Beauty&minPrice=0&maxPrice=100`

    axios.get(queryUrl, {
        headers: {
            "X-APP-ID": "4CFBnY7bP986OfTscg6Q57",
            "X-API-KEY": "IGXRFhMcPzMxq4Ro0vMxuAbPY1wuTpcE8bOhYlNt"
        } 
    }).then((dataRes) => {
        
        //if(JSON.stringify(dataRes.data.result.products))
        if(dataRes.data.statusCode > 299) {
            throw err;
        } else {
            let stringifyData = JSON.stringify(dataRes.data.result.products)
            // for(let i = 0; i < stringifyData.length; i++) {
            //     return stringifyData[i];
            // }
            // const stringifyData2 = stringifyData.map(function(repo) {
            //     return repo;
            //   });
        
            fs.writeFile("result1.csv", stringifyData, err => {
                if (err) {
                    throw err;
                } 
            })

        }
       
    })

})

module.exports = router;
