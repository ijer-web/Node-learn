var fs = require('fs');

fs.stat(__filename, function (err, stats) {
    console.log(stats.isFile());
    console.log(stats);
});

fs.readFile(__filename,{encoding:'utf-8'}, function (err, data) {
    if (err.code == 'ENOENT') {
        console.error(err.message);
    } else {
       console.log(data);
    }
});

