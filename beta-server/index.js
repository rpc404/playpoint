const http = require('http')

require('dotenv').config();

const port = process.env.PORT || 8000;
// deepcode ignore HttpToHttps: <please specify a reason of ignoring this>
http.createServer().listen(PORT,() => {
    console.log('server listening on port ' + port)
})