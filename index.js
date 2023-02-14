const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url==="/")
    var data = [
        {
            Name:"Rahul Sharma",Profession:"Student",Location:"Haryana",
            Name:"Rahul Sharma",Profession:"Student",Location:"Haryana",
            Name:"Rahul Sharma",Profession:"Student",Location:"Haryana",
            Name:"Rahul Sharma",Profession:"Student",Location:"Haryana",
        }
    ]
    else{
        res.writeHead(404)
        res.end("<h1>404!!!Page Not Found</h1>")
    }
})
server.listen(8000,"localhost",()=>console.log("Server is Running on Port 8000"))




// const http = require("http")

// const server = http.createServer((req,res)=>{
//     if(req.url==="/")
//     res.end("<h1>This is Home Page</h1>")
//     else if(req.url==="/about")
//     res.end("<h1>This is About Page</h1>")
//     else if(req.url==="/contact")
//     res.end("<h1>This is Contact Page</h1>")
//     else if(req.url==="/profile")
//     res.end("<h1>This is Profile Page</h1>")
//     else{
//         res.writeHead(404)
//         res.end("<h1>404!!!Page Not Found</h1>")
//     }
// })
// server.listen(8000,"localhost",()=>console.log("Server is Running on Port 8000"))






// const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.end("Hello From Server...")
// })

// server.listen(8000,"localhost",()=>console.log("Server is Running on Port 8000"))





//using password validator
// const PasswordValidator = require("password-validator")

// var schema = new PasswordValidator()
// schema
// .is()
// .min(8)
// .max(20)
// .has().digits(1)
// .has().uppercase(1)
// .has().not().spaces()
// .has().symbols(1)
// .is().not().oneOf(["Admin@123","Admin@12345","Admin123456789","User@123"])
// console.log(schema.validate("nitin"))
// console.log(schema.validate("nitin@123"))
// console.log(schema.validate("Nitin@123"))
// console.log(schema.validate("Nitin@123"))
// console.log(schema.validate("Admin@12345"))






// require("./BuiltinModules/fsModuleSync")
// require("./BuiltinModules/fsModuleAsync")
// require("./BuiltinModules/UsingOSModule")
// require("./BuiltinModules/usingPathModule")

//Import Export Example in MJS

// import * as Data from "./MJSModules/myModule.mjs"
// console.log(Data.default)
// console.log(Data.a)
// console.log(Data.emp)

// import sample,{a,emp} from "./MJSModules/myModule.mjs"
// console.log(sample)
// console.log(a)
// console.log(emp)

// import name,{a,emp} from "./MJSModules/myModule.mjs"
// console.log(name)
// console.log(a)
// console.log(emp)



// import name from "./MJSModules/myModule.mjs";
// console.log(name)



//Import Export Example in CJS

// var data = require("./CJSModules/mymodule")
// console.log(data.name)
// console.log(data.a)
// console.log(data.emp)


// var {name,a,emp} = require("./CJSModules/mymodule")
// console.log(name)
// console.log(a)
// console.log(emp)

// var name = require("./CJSModules/mymodule")
// console.log(name);


// console.log("Hello World")
// console.log("Hello World1")
// console.log("Hello World2")
// console.log("Hello World3")