
require('dotenv').config()
var messagebird = require('messagebird')(process.env.MESSAGEBIRD_API_KEY);

messagebird.messages.create({
    originator : '9142460441',
    recipients : [ '+17732998783' ],
    body : 'Hello World, I am a text message and I was hatched by Javascript code!'
 },

 function (err, response) {
    if (err) {
       console.log("ERROR:");
       console.log(err);
   } else {
       console.log("SUCCESS:");
       console.log(response);
   }
});