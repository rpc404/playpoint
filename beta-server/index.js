const http = require('http')

const port = process.env.PORT || 8000;
http.createServer().listen(PORT,() => {
    console.log('server listening on port ' + port)
})