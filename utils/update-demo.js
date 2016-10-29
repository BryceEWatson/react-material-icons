'use strict';
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const demoPagePath = path.join(__dirname, '../demo.js');
const demoIndexDestPath = path.join(__dirname, '../demo-page/index.html');
const demoIndexTemplatePath = path.join(__dirname, './templates/demo-page-index.ejs');
const templatePath = path.join(__dirname, './templates/demo-page.ejs');
const srcDirPath = path.join(__dirname, '../src');

function isJSX(fileName) {
    try {
        return (fileName.split('.')[1].toLowerCase() === 'jsx');
    } catch(ex) {
        return false;
    }
}

fs.readdir(srcDirPath, (err, files) => {
    let demoPageContent = fs.readFileSync(templatePath, 'utf8');
    let demoIndexContent = fs.readFileSync(demoIndexTemplatePath, 'utf8');
    let components = [];
    files.forEach((file) => {
        const filePath = path.join(srcDirPath, file);
        const fileName = path.basename(file);
        if(isJSX(path.basename(file))) {
            components.push({
                name: fileName.split('.')[0].toUpperCase(),
                path: filePath
            });
        }
    });
    const templateData = {
        data: {
            components: components
        }
    };
    let demoPageRendered = ejs.render(demoPageContent, templateData);
    let indexPageRendered = ejs.render(demoIndexContent, templateData);
    fs.writeFileSync(demoPagePath, demoPageRendered);
    fs.writeFileSync(demoIndexDestPath, indexPageRendered);
});
