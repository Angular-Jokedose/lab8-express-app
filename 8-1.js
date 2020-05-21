var expressFunctions = require('express');
var expressApp = expressFunctions();

expressApp.get('/api/resource', function (req, res){ 
    res.status(200).send('Hello World');
})

expressApp.listen(3000, function() {
    console.log('Listening on port 3000');
})