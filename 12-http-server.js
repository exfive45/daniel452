const http = require('http')
const server = http.createServer((req, res)=>{
      if (req.url === '/'){
            res.end('cece ils la page accueil')
      }
      if (req.url === '/about'){
            res.end('cece est la page fag')
      }
      res.end(`
      <h1>Oops </h1>
      <p> nous ne semblons pas trouver la page que vous cherchez</p>
      <a href = "/">home</a>
      `)
})

server.listen(5000)
