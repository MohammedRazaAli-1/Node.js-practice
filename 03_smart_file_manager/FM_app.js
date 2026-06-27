const {
    createFile,
    readFile,
    appendFile,
    renameFile,
    deleteFile,
    listFiles
} = require("./fileManager");

const command = process.argv[2];

switch (command) {

    case "create":
        createFile(process.argv[3]);
        break;

    case "read":
        readFile(process.argv[3]);
        break;

    case "append":
        appendFile(process.argv[3], process.argv.slice(4).join(" "));
        break;

    case "rename":
        renameFile(process.argv[3], process.argv[4]);
        break;

    case "delete":
        deleteFile(process.argv[3]);
        break;

    case "list":
        listFiles();
        break;

    default:
        console.log(`
Available Commands:

node app.js create <filename>

node app.js read <filename>

node app.js append <filename> "text"

node app.js rename <oldname> <newname>

node app.js delete <filename>

node app.js list
`);
}