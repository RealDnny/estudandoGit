const http = require("http")
    const server=http.createServer((req,res)=>{
        res.write("<h1>Ola Mund o</h1>")
    })
    server.listen(3000, ()=>console.log("Rodando..."))