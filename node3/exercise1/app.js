var fs = require('fs');
var stream = fs.createReadStream("data.txt");

stream.on("data", function(data)
{
    console.log(data);
    var buf = Buffer.from(data);
    console.log(buf.toString());
})

