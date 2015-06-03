var req = require('request');


var postOptions = {
         headers: {
           "Accept":"application/json",
           "Content-Type":"application/json"
         },
         url: "http://www.google.com",
         json:true,
         formData: {"x":"y"}
};


 req.post(postOptions, function(err,httpResponse,body){

     console.log(body);
 });
