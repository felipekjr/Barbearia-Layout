var app = require('./config/server')
var routes = require('./app/routes')(app)



app.listen(8080, ()=>{
    console.log("Serv-on")
})