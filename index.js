const express = require('express') //переменная для подключения модюля express

const app = express() //переменная отвечающая за все приложение, являющаяся результатом работы функции express


//метод get первым параметром принимает какой-либо root для обработки
//вторым параметром колбек функцию с двумя парамерами спомощью которовый даем ответ на get запрос
app.get('/', (req, res) => {
    res.end('Hello from node.js')
})
//метод listen определяющий на каком порту будет доступен наш сервер (1 параметр),
// вторым параметром принимает функцию
app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})