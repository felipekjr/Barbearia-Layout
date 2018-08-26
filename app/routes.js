// exportando em função para já serem executados
module.exports = function(app){
    app.get('/', (req, res)=>{
        res.render("home.ejs")
    })
}
