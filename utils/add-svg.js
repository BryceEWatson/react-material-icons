'use strict';
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const newSVGSPath = path.join(__dirname, './new-svgs');
const destPath = path.join(__dirname, '../src');
const templatePath = path.join(__dirname, './templates/react-svg-component.ejs');

function fileExists(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

fs.readdir(newSVGSPath, (err, files) => {
    files.forEach((file) => {
        console.log(file);
        const filePath = path.join(newSVGSPath, file);
        const fileName = path.basename(filePath).split('.')[0];
        const fileContent = fs.readFileSync(filePath, 'utf8');
        if (!fileExists(path.join(destPath, filePath))){
            let template = fs.readFileSync(templatePath, 'utf8');
            let compileOptions = {
                data: {
                    name: fileName,
                    svg: fileContent
                }
            };
            let compiledContent = ejs.render(template, compileOptions);
            const destFile = path.join(destPath, fileName + '.jsx');
            fs.writeFileSync(destFile, compiledContent);
        }
    });
})
