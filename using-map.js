function citiesOnly(obj){
    return obj.map(item => item.city)
}

function upperCasingStates(states){
    return states.map(item => {
        let sl = item.split(' ')
        sl = sl.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return sl.join(' ')
    })
}

function fahrenheitToCelsius(temperatures){
    return temperatures.map(temperature => {
        const tempNum = Number(temperature.slice(0,-2))
        const celsius = Math.round((tempNum - 32) * (5/9))
        return temperature = celsius + "°C"
    })
}

function trimTemp(obj){
    return obj.map(({city , temperature}) => ({city : city,temperature : temperature.split(' ').join('')}) )
}

function tempForecasts(obj){
    const upperStates = upperCasingStates(obj.map(item => item.state))
    const trimedTemperatures = trimTemp(obj)
    const fToC = fahrenheitToCelsius(trimedTemperatures.map(item=>item.temperature))
    for(let i=0;i<trimedTemperatures.length;i++){
        trimedTemperatures[i].temperature = fToC[i]
        trimedTemperatures[i].state = upperStates[i]
        trimedTemperatures[i].region = obj[i].region
    }

    return trimedTemperatures.map(({city,temperature,state}) => (temperature+"elsius in "+city+", "+state))
}
