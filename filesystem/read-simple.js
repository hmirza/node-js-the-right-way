// Reading and Writing Files Asynchronously
// whole-file-at-once approach

'use strict';
const fs = require('fs');
fs.readFile('target.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
