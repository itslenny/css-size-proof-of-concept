const { writeFileSync, appendFileSync } = require('fs');
const { resolve } = require('path');

let output = '';
for (let i = 111; i < 4444; i++) {
    output += `@media screen and (height: ${i}px) { #loadpic-h { background-image: url(${i}h.jpg); } }\n`
    output += `@media screen and (width: ${i}px) { #loadpic-w { background-image: url(${i}w.jpg); } }\n`
}

const outPath = resolve(__dirname, 'style-queries.css');
writeFileSync(outPath, output);