const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "8998762539",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br /><br />Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoasatravés de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [360],
        time_to: [1220]
    },
    {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "980837188",
        bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crecimento de quem se interessar.<br /><br />Comecei a minha jornada profícional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição:"Aprenda a fazer dinheiro com isso!".',
        subject: "Educação Física",
        cost: "40",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Tiago Luchtenberg",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7dhttps://media-exp1.licdn.com/dms/image/C4E03AQHfarmcSLlWtA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=mUlenOBA0NVApXKHGCtbrrBz-az4RGLt0XOtKh81WV065&v=4",
        whatsapp: "859634085",
        bio: "As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar.Tenho memória fotográfica e nunca fico perdido.<br /><br />Eu ensino a galera como não se perder na vida, com lições geográficas simpes pra você nunca mais precisar de mapa na sua bela vida.",
        subject: "Geografia",
        cost: "360",
        weekday: [0],
        time_from: [140],
        time_to: [1220]
    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html", { proffys:'proffys' , title: 'hi from nunjucks' })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar arquivos estáticom (css, scripts, imagens)
server.use(express.static("public"))
//rotas de aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses) 
    .listen(5500)

//node src/server.js