// how to readfile

const { error } = require('console');
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) =>{
    if (err){
        console.log("error reading file:", err);
        return;
    }else{
        console.log (data);
    }
})

// how to write file

fs.writeFile('example.txt', "Hello crush:", (err) =>{
    if (err){
        console.log("error writing file:,", err);
        return;
    }
    console.log("file written successfully in example.txt file");
})

// how to append file

fs.appendFile('example.txt', "\nI love you crush", (err) =>{
    if (err){
        console.log("error appending file:", err);
        return;
    }
    console.log("file appended successfully in example.txt file");
})    

// how to delete file
// fs.unlink('example.txt',(err) =>{
//     if (err){
//         console.log("error deleting file:", err);
//         return;
//     }
//     console.log("file deleted successfully in example.txt file");
// });

// how to rename file
fs.rename('example.txt', 'newExample.txt', (err) =>{
    if (err){
        console.log("error renaming file:", err);
        return;
    }
    console.log("file renamed successfully to newExample.txt file");
});

// how to create a folder
fs.mkdir('newFolder', (err) =>{
    if (err){
        console.log("error creating folder:", err);
        return;
    }
    console.log("folder created successfully: newFolder");
});

// read all files in a directory
fs.readdir('./', (err, files) =>{
    if (err){
        console.log("error reading directory:", err);
        return;
    }
    console.log("files in directory:");
    files.forEach(file => {
        console.log(file);
    });
});

