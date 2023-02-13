/*
fs module : used to perform operations regarding file handling
file Handling/file Input Output Operations:
    1. Creating a new File or Folder
    2. Writing Data into a file
    3. Appending Data into a file
    4. Reading Data from a file
    5. Rename a file
    6. Delete a file
    7. Delete a folder
 */

let fs = require('fs')

/*
mkdir():     used to create a folder, it throw an error is folder
             exist or Path is Invalid
 */

// fs.mkdir("sample",(error)=>{
//     if(error)
//     console.log("Folder Already Exist!!")
//     else
//     console.log("Folder is Created!!");
// })


/*
rmdir():     used to delete a folder, it throw an error is folder
             does not exist or Path is Invalid or folder is not Empty
 */
// fs.rmdir("sample",(error)=>{
//     if(error)
//     console.log("Folder Doesn't Exist")
//     else
//     console.log("Folder is Deleted!!!")
// })


/*
writeFile():    used to write data into a file, if file doesn't exist
            is create a new file, and if file already exist,
            it delete a old data from file and rewrite new data
            into file
 */
// fs.writeFile("sample/mytext.txt","Hello World1\n",(error)=>{
//     if(error)
//     console.log("Invalid Path!!")
//     else{
//         fs.writeFile("sample/mytext.txt","Hello World2\n",()=>{})       
//         fs.writeFile("sample/mytext.txt","Hello World3\n",()=>{})
//         fs.writeFile("sample/mytext.txt","Hello World4\n",()=>{})
//         fs.writeFile("sample/mytext.txt","Hello World5\n",()=>{})
//         console.log("Data Written in File!!!!")
//     }
// })

/*
appendFile():    used to append data into a file, if file doesn't exist
            is create a new file, and if file already exist,
            it write new data after old data into file
//  */
// fs.appendFile("sample/mytext.txt","Hello World1\n",(error)=>{
//     if(error)
//     console.log("Invalid Path!!")
//     else{
//         fs.appendFile("sample/mytext.txt","Hello World2\n",()=>{})       
//         fs.appendFile("sample/mytext.txt","Hello World3\n",()=>{})
//         fs.appendFile("sample/mytext.txt","Hello World4\n",()=>{})
//         fs.appendFile("sample/mytext.txt","Hello World5\n",()=>{})
//         console.log("Data Written in File!!!!")
//     }
// })


/*
readFile(): used to read data from a file, if we not provide encryption
            it return buffer data so to decrypty provide utf-8
 */
// fs.readFile("sample/mytext.txt","utf-8",(error,data)=>{
//     if(error)
//     console.log("Invalid Path or File Doesn't Exist")
//     else
//     console.log(data)
// })


/*
rename()    :   used to rename a file, it throw an error is file 
                doesn't exist or invalid Path
 */

// fs.rename("sample/mytext.txt","sample/sampletxt.txt",(error)=>{
//     if(error)
//     console.log("Invalid Path or File Doesn't Exist")
//     else
//     console.log("File name is Changed!!!!");
// })

/*

unlink()    :   used to delete a file, it throw an error is file 
                doesn't exist or invalid Path
 */
// fs.unlink("sample/sampletxt.txt", (error) => {
//     if (error)
//         console.log("Invalid Path or File Doesn't Exist")
//     else
//         console.log("File is Deleted!!!!");
// })



