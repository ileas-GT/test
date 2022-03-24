let url = `http://universities.hipolabs.com/search?country=morocco`

const request = require('request');

request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let universities = JSON.parse(body)
      console.log(universities);
    }
  });