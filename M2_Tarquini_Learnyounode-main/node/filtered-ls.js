const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const fileExt = '.' + process.argv[3];

fs.readdir(dirPath, (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
        if (path.extname(file) === fileExt) console.log(file);
    });
});