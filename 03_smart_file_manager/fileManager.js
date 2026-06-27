const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "files");

// Create Folder Automatically
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// Create File
function createFile(fileName) {

    if (!fileName) {
        return console.log("Please provide file name.");
    }

    const filePath = path.join(folderPath, fileName);

    if (fs.existsSync(filePath)) {
        return console.log("File already exists.");
    }

    fs.writeFileSync(filePath, "");

    console.log("File created successfully.");
}

// Read File
function readFile(fileName) {

    if (!fileName) {
        return console.log("Please provide file name.");
    }

    const filePath = path.join(folderPath, fileName);

    if (!fs.existsSync(filePath)) {
        return console.log("File not found.");
    }

    const data = fs.readFileSync(filePath, "utf-8");

    console.log(data);
}

// Append File
function appendFile(fileName, content) {

    if (!fileName || !content) {
        return console.log("Please provide filename and content.");
    }

    const filePath = path.join(folderPath, fileName);

    if (!fs.existsSync(filePath)) {
        return console.log("File not found.");
    }

    fs.appendFileSync(filePath, content + "\n");

    console.log("Content added successfully.");
}

// Rename File
function renameFile(oldName, newName) {

    if (!oldName || !newName) {
        return console.log("Please provide old and new file names.");
    }

    const oldPath = path.join(folderPath, oldName);
    const newPath = path.join(folderPath, newName);

    if (!fs.existsSync(oldPath)) {
        return console.log("File not found.");
    }

    fs.renameSync(oldPath, newPath);

    console.log("File renamed successfully.");
}

// Delete File
function deleteFile(fileName) {

    if (!fileName) {
        return console.log("Please provide file name.");
    }

    const filePath = path.join(folderPath, fileName);

    if (!fs.existsSync(filePath)) {
        return console.log("File not found.");
    }

    fs.unlinkSync(filePath);

    console.log("File deleted successfully.");
}

// List Files
function listFiles() {

    const files = fs.readdirSync(folderPath);

    if (files.length === 0) {
        return console.log("No files found.");
    }

    console.log("Files:");

    files.forEach((file, index) => {
        console.log(`${index + 1}. ${file}`);
    });
}

module.exports = {
    createFile,
    readFile,
    appendFile,
    renameFile,
    deleteFile,
    listFiles
};