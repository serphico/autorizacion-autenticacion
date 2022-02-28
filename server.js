const httpServer = require('./app.js')


/*servidor */

const PORT = process.env.PORT || 8080;

const server = httpServer.listen(PORT, () => {
    console.log(`SERVER ON`);
});

server.on('error', error => { console.log(error)})

