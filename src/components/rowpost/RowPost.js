import React, { useEffect, useState } from 'react'
import { imgUrl,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'
import axios from '../../axios'
import './RowPost.css'
function RowPost(props) {
    const[movie,setMovie]=useState([])
    const[urlId,setUrlID]=useState('')
    useEffect(()=>{
        axios.get(props.url)
        .then((response)=>{
            setMovie(response.data.results)
        })
        

    },[])
    const handleMovie=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
            if(response.data.results.length!==0){
                setUrlID(response.data.results[0])
            }else{
                console.log('array empty')
            }
        })
    }
    const opts = {
        height: '400',
        width:'100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }}

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                <img onClick={()=>{handleMovie(obj.id)}} className='poster' alt='poster' src={`${imgUrl+obj.backdrop_path}`} />
                )}
                
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts}  />}
        </div>
    )
}

export default RowPost
