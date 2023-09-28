import React, { useEffect, useState } from 'react'
import { imgUrl } from '../../constants/constants'
import { top_rated } from '../../url'
import axios from '../../axios'
import './Banner.css'
function Banner() {
    const[movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(top_rated).then((response)=>{console.log(response.data.results[0])
         setMovie(response.data.results[10 + Math.floor( Math.random() * 11 )])   
        })
        

    },[])
    return (
        <div style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.original_title :""}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview :""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner