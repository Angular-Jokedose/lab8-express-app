var expressFunction = require('express');
var expressApp = expressFunction();
expressApp.use(expressFunction.json());

const students = [
  { stdid: "B6016357", name: "Trirong Bamrungketaudom" },
  { stdid: "B6022299", name: "Jaidee DeeJai" },
];

expressApp.post('/api/resource/students', function(req, res) {
    const stdid = req.body.stdid;
    const name = req.body.name;
    if (stdid.length == 8) {
        const student = {
            stdid: stdid,
            name: name
        }
        students.push(student);
        res.status(200).send(student);
    }else {
        res.status(400).send('Error cannot add student!');
    }
});

expressApp.listen(3000, function() {
    console.log('Listening on port 3000');
});