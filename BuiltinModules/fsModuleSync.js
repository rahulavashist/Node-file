let fs = require('fs')

//mkdirSync() : used to create a folder

// try{
//     fs.mkdirSync("sample")
//     console.log("Folder is Created!!!")
// }
// catch(error){
//     // console.log(error);
//     console.log("Folder is Alrady Exist!!")
// }

//rmdirSync() :used to delete a folder

// try{
//     fs.rmdirSync("sample")
// }
// catch(error){
//     console.log("Invalid Path or Folder Already Deleted!!!");
// }

/*
writeFileSync()
create a new file if file doesn't exist, and if file already exist
it delete all content of file and re-write data into it
*/

// try{
//     fs.writeFileSync("sample/mytext.txt","Hello World1\n")
//     fs.writeFileSync("sample/mytext.txt","Hello World2\n")
//     fs.writeFileSync("sample/mytext.txt","Hello World3\n")
//     fs.writeFileSync("sample/mytext.txt","Hello World4\n")
//     fs.writeFileSync("sample/mytext.txt","Hello World5\n")
// }
// catch(error){
//     console.log("Invalid Path!!!")
// }




/*
appendFileSync()
create a new file if file doen't exist, and if file already exist
it write data after old data
*/
// try{
//     fs.appendFileSync("sample/mytext.txt","Hello World1\n")
//     fs.appendFileSync("sample/mytext.txt","Hello World2\n")
//     fs.appendFileSync("sample/mytext.txt","Hello World3\n")
//     fs.appendFileSync("sample/mytext.txt","Hello World4\n")
//     fs.appendFileSync("sample/mytext.txt","Hello World5\n")
// }
// catch(error){
//     console.log("Invalid Path!!!")
// }

/*
readFileSync()
read a file and return data 
if we not use any encoding then data is return in buffer format
to encode use 'utf-8'
 */
// try{
//     var data = fs.readFileSync("sample/mytext.txt","utf-8")
//     console.log(data)
// }
// catch(error){
//     console.log("Invalid Path or File Doesn't Exist!!!!!");
// }

// fs.renameSync() : used to rename a file
// try{
//     fs.renameSync("sample/mytext.txt","sample/sampletext.txt")
// }
// catch(error){
//     console.log("Invalid Path or File Not Found!!!")
// }

//unlinkSync() : used to delete a file 
// try{
//     fs.unlinkSync("sample/sampletext.txt")
// }
// catch(error){
//     console.log("Invalid Path or File Not Found!!!")
// }

// fs.rmdirSync("sample")