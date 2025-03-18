const newman = require('newman');
require('dotenv').config();
 
newman.run({
   //collection:`https://api.postman.com/collections/42721078-ad02e92f-1ece-4ec3-853c-ad16735e6e9a?access_key=${process.env.access_key}`,
    collection:require('./collection/dmoney-rest-api-tests.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
