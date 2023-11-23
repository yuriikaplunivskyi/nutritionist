const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const publicFolder = path.join(projectRoot, 'public');
const imagesFolder = path.join(publicFolder, 'images'); 

function updateImagePaths(folder) {
    fs.readdirSync(folder).forEach((file) => {
        const filePath = path.join(folder, file);
        if (fs.statSync(filePath).isDirectory()) {
        updateImagePaths(filePath);
        } else {
        if (path.extname(file).match(/\.(png|jpg|jpeg|gif)$/)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const updatedContent = fileContent.replace(/(\/)?public\/images\//g, './');
            fs.writeFileSync(filePath, updatedContent, 'utf-8');
        }
        }
    });
}

updateImagePaths(imagesFolder);
