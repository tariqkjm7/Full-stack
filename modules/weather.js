const axios = require('axios');

const express = require('express');

function weather(req, res) {
    // res.send('from weather')
    let q = req.query.city
    console.log(q);
    // weather key :21d258f0d3504530a7f35033e1d8e43e
    // url : https://api.weatherbit.io/v2.0/forecast/daily?city=Amman&key=21d258f0d3504530a7f35033e1d8e43e
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${q}&key=${process.env.WEATHER_KEY}`
console.log(url);
   
axios 
.get(url)
.then(result =>{

        let weatherArray = result.data.data.map(item =>{

            return new Weather(item)
        })
        res.send(weatherArray)


    }).catch(error=>{
        res.send(error)
    })


}


class Weather {
    constructor(item){
            this.Description = item.weather.description;
            this.Date = item.valid_date;
            this.Temperature = item.temp;
    }
}
   
module.exports = weather;