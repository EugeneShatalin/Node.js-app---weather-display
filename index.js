const express = require('express') //переменная для подключения модюля express
const bodyParser = require('body-parser')//для полусения данных из формы
const wetherRequest = require('./requests/weather.request') //подключаем свой модуль

const app = express() //переменная отвечающая за все приложение, являющаяся результатом работы функции express

app.set('view engine', 'ejs') //поставили по умолчанию файлы ejs
app.use(express.static('public'))//назначение статического пути проекта
app.use(bodyParser.urlencoded({extended: true}))


//метод get обрабатывает get запрос, первым параметром принимает какой-либо root для обработки
//вторым параметром колбек функцию с двумя парамерами req - это то что мы отправляем в запросе
//res - это то, как мы отвечаем на данный запрос
app.get('/', (req, res) => {
    res.render('index') //при запросе get на корнивую папку проекта отрисовать index
})

//метод post обрабатывает post запрос, все аналогично get методу
app.post('/', async (req, res) => {
    const { city } = req.body

    const {weather, error} = await wetherRequest(city) //диструктурируем из объекта два нужных нам значения
    res.render('index') //при запросе post на корнивую папку проекта отрисовать index
})

//метод listen определяющий на каком порту будет доступен наш сервер (1 параметр),
// вторым параметром принимает функцию
app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})