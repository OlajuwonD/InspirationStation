const request = require('request');

const options = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    headers: {
      'x-rapidapi-key': "5f7d2c691bmsh49730c1a26bb7acp1f89e9jsne94f614c3c09"
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
  
      console.log(body);
  });