//Función para obtener el timestamp
function getTimestamp(){
    return Date.now()
}

//Funciòn para obtener la fecha en formato largo
function getLongTime(locale = 'es-ES'){
    const options ={
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    }
    return new Date().toLocaleString(locale,options)
}

module.exports = {
    getTimestamp,
    getLongTime
}