const fs = require('fs');
const path = require('path');

fs.writeFile("content.txt", "this is my first file", (err) => 
{
    if(err) {throw err}
    process.stdout.write("File Created Successfully")
})

const filePath = path.join(process.cwd(), "content.txt")

fs.readFile(filePath, (err, content) => {
    if (err) {throw err}
    process.stdout.read(content)
})

fs.readdir(process.cwd(), (err, files) => {
    if (err) {throw err}
    console.log(files)
})

fs.unlink(filePath, (err) => {
    if (err) {throw err}
    console.log("File Deleted")
})

fs.mkdir(`${process.cwd()}/myFolder/secondFolder`, { recursive: true }, (err) => {
    if (err) {throw err}
    console.log("Folder Created Successfully")
})

fs.rmdir(`${ process.cwd()}/myFolder`, { recursive: true }, (err) => {
    if (err) {throw err}
    console.log("Folders Deleted Successfully")
})

fs.rename(`${ process.cwd()}/myFolder/secondFolder`, `${ process.cwd()}/myFolder/newFolder`, (err) => {
    if (err) {throw err}
    console.log("Directory Renamed")
})

fs.rename(`${process.cwd()}/content.txt`, `${process.cwd()}/newFile.txt`, (err) => {
    if (err) {throw err}
    console.log("File Renamed")
})

fs.appendFile(filePath, "\n", (err) => {
    if (err) {throw err}
    console.log("New Content Added")
})