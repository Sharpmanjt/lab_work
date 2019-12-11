var request = require('request');

var fs = require('fs');

request('http://www.google.com', function (error, res, body)
{
    const writer = fs.createReadStream('http://www.google.com');
    const reader = fs.createWriteStream('./file.txt');

    writer.on('pipe', src => {
        console.log('Something is piping into the writer');
        assert.equal(src, reader);
    });
    reader.pipe(writer);

    console.log('body:', body);
})