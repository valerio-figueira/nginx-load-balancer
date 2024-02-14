class Server {
    constructor(port) {
        this.port = port
        this.express = require('express')
        this.app = this.express()
        this.path = require('path')
        this.initializeMiddlewares()
        this.initializeRoutes()
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port)
        })
    }

    initializeMiddlewares() {
        const publicPath = this.path.join(__dirname, 'public')
        this.app.use(this.express.static(publicPath))
        this.app.use(this.express.json())
    }

    initializeRoutes() {
        this.app.get('/', (req, res) => {
            res.sendFile('index')
        })

        this.app.get('/about', (req, res) => {
            res.sendFile(__dirname + '/public/about.html')
        })
    }
}


module.exports = Server