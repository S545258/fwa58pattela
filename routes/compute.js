var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // Build a fake url so we can get the search parameters using a URL object
  fake_url = "https://fake.com/path" + req.url
  const url = new URL(fake_url)
  const search_params = url.searchParams
  var input = Math.floor((Math.random() * 100) + 1)
  var output;
  if(search_params.get("x")){
    input = search_params.get("x")
  }
  output = Math.exp(input)  
  res.write(`Math.abs() applied to ${input} is ${output}`);
  res.write(`Math.acos() applied to ${input} is ${output}`);
  res.write(`Math.sin() applied to ${input} is ${output}`);
  res.write(`Math.sinh() applied to ${input} is ${output}`);
  res.send();
});

module.exports = router;