const fs = require('fs');
const path = require('path');

fs.writeFile("content.txt", "this is my first file", (err) => 
{
    if(err) 
        {
            throw err
        }
    process.stdout.write("File Created Successfully")
})

const filePath = path.join(process.cwd(), "content.txt")

fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err
    }
    process.stdout.read(content)
})

fs.readdir(process.cwd(), (err, files) => {
    if (err) {
        throw err
    }
    console.log(files)
})





