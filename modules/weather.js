const axios = require('axios');

const express = require('express');
let TempMemory = {};
console.log(TempMemory);
function weather(req, res) {
    let q = req.query.city

    let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${q}&key=${process.env.WEATHER_KEY}`
    
    if (TempMemory[q] !== undefined) {
        console.log('the memory contain data');
        res.send(TempMemory[q])
    } else {
        console.log('memory is empty');
        axios
            .get(url)
            .then(result => {

                let weatherArray = result.data.data.map(item => {

                    return new Weather(item)
                })
                TempMemory[q] = weatherArray
                res.send(weatherArray)


            }).catch(error => {
                res.send(error)
            })

    }



}


class Weather {
    constructor(item) {
        this.Description = item.weather.description;
        this.Date = item.valid_date;
        this.Temperature = item.temp;
    }
}

module.exports = weather;
//