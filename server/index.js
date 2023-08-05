const server = require("./app")


server.listen(process.env.PORT , ()=>{
    console.log(`server is running : http://localhost:${process.env.PORT}`);
})