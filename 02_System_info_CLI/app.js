// Problem 2: System Information CLI
// Objective

// Create a Node.js program that displays information about the current system using only core Node.js modules.

// You are not allowed to use any external packages like npm install.

// Expected Output (Example)
// ==========================
// SYSTEM INFORMATION
// ==========================

// Username        : Mohammed
// Home Directory  : C:\Users\Mohammed
// Platform        : win32
// Architecture    : x64
// CPU Cores       : 8
// Total Memory    : 15.89 GB
// Free Memory     : 8.42 GB
// Node Version    : v24.4.1
// Current Folder  : D:\NodeJS\Practice
// Requirements

// Your program should display:

// Username
// Home Directory
// Platform
// Architecture
// Number of CPU cores
// Total RAM (in GB)
// Free RAM (in GB)
// Node.js version
// Current working directory

const os = require("os");
const process = require("process");

console.log(`
==========================
SYSTEM INFORMATION
==========================

Username        : ${os.userInfo().username}
Home Directory  : ${os.homedir()}
Platform        : ${os.platform()}
Architecture    : ${os.arch()}
CPU Cores       : ${os.availableParallelism()}
Total Memory    : ${os.totalmem()/ 1024 / 1024 / 1024} GB
Free Memory     : ${os.freemem() / 1024 / 1024 / 1024} GB
Node Version    : ${process.version}
Current Folder  : ${process.cwd()}
    
    `)

if(process.argv[2] === "--memory"){
    console.log(`Total Memory : ${os.totalmem()/ 1024 / 1024 / 1024} GB
    Free Memory : ${os.freemem() / 1024 / 1024 / 1024} GB`)

    }
else if(process.argv[2] === "--cpu"){
    console.log(
        `
Username        : ${os.userInfo().username}
Home Directory  : ${os.homedir()}
Platform        : ${os.platform()}
Architecture    : ${os.arch()}
CPU Cores       : ${os.availableParallelism()}
`
    )

}
else if(process.argv[2] === "--node"){
    console.log(
`
Node Version    : ${process.version}
Current Folder  : ${process.cwd()}
`
    )

}else{
    console.log("Please provide a valid argument: --memory, --cpu, or --node")
}

