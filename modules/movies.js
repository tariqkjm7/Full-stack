const axios = require('axios');

const express = require('express');

function movie(req, res){
    let q = req.query.query

    let url =  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&query=${q}`
   console.log(q);
   console.log(url);

    axios 
    .get(url)
    .then(result =>{
    

            let img = 'https://image.tmdb.org/t/p/w500';
            let movieArray = result.data.results.map(item =>{
            
                let avatar = item.poster_path?img+item.poster_path:'https://p.kindpng.com/picc/s/78-786678_avatar-hd-png-download.png'
                
                return new Movies(item.title, avatar, item.vote_average);
            })
            res.send(movieArray)
            
    
        }).catch(error=>{
            res.send(error)
        })
    
    
    }

    class Movies {
        constructor(title,img,rate){
                this.title = title;

                this.img = img;

                this.rate = rate;
        }
    }



    module.exports = movie;
    //