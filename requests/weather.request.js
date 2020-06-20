const rp = require('request-promise')

//экспортируем асинхронную функцию, чтоб она была
// доступна в других файлах проекта
module.exports = async function (city) {
    if (!city) {
        throw new Error('Имя города не может быть пустым')
    }

    console.log('City: ', city)
}