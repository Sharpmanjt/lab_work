var moment = require('moment');

var greet = function()
{
    var wrapped = moment(new Date());
    wrapped().format('MMMM Do YYYY, h:mm:ss a');
    console.log(wrapped);
}

var greet2 = function()
{

    Array.from({length: 10 }, (x, i) => {
        console.log('Hello world!');
        var currentDate = new Date();
        getCurrentDateandTime();
    });
}

function getCurrentDateandTime()
{
    var D = new Date().toLocaleString().split(',');
    console.log("Current date: " + D[0] + " Current time: " + D[1]);
}

greet();

