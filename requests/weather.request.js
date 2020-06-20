const rp = require('request-promise')//для обработки запросов на сервер

//экспортируем асинхронную функцию, чтоб она была
// доступна в других файлах проекта
module.exports = async function (city) {
    if (!city) {
        throw new Error('Имя города не может быть пустым')
    }

    const KEY = '1e129d771047b7a7b23be1d44a5365ca'
    const uri = 'https://api.openweathermap.org/data/2.5/weather'

    //параметры запроса на сервер
    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try {
        const data = await rp(options) //отправка запроса на сервер с присвоением полученых результатов в data
        const celsius = (data.main.temp - 32) * 5/9 //приобразование температуры по фарингейту в цельсия

        return {
        weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        }
    }
}