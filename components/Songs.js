import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Song from './Song'

export default function Songs({data}) {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        Axios.get('https://backend-nest-bdd.herokuapp.com/songs')
        .then((res) => {
            console.log(res.data)
            setSongs(res.data)
        })
    },[])
    return (
        <div className='p-8 w-11/12 mx-auto text-white'>
            <h1 className='font-semibold text-2xl mb-6 pl-2 text-white'>Top Song's in Spotify</h1>
            <div className='grid grid-cols-3 mx-auto gap-x-10 gap-y-5 p-6'>
                {songs.map(song => {
                    return(
                        <a href={`http://open.spotify.com/track/${song.track_id}`} target='_blank' key={song.id} className='outline-none'>
                            <Song _id={song._id} track_id={song.track_id} artist_name={song.artist_name} track_name={song.track_name}/>
                        </a>
                    )
                })}
            </div>
            
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await Axios.get(`https://backend-nest-bdd.herokuapp.com/songs`)

    // Pass data to the page via props
    return { 
        props: res  
    }
}
