import React, {useEffect, useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Axios from 'axios'
import Image from 'next/image'

export default function Song({ track_id, artist_name, track_name, _id }) {
    
    const [images, setImages] = useState(["https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be"]);

    const number = 0;
    const handleAddSong = async () => {
        Axios.post('http://localhost:3001/liked',{
            idUser: '6293f2c3746d58900a759913',
            idSong: _id
        }).then(res => {
            console.log(res)
        })
    }

    useEffect(async() => {
        Axios.get(`https://api.spotify.com/v1/tracks/${track_id}`, {
            headers: {
                Authorization: `Bearer BQDLPbKNifUJYGTjV1l9RxPHUutrLIzaMFRy6kdyrKn-Q--SfDTwOfc6F9q85zgE-IPL5hWWZOEdZ6e7ByLc1E_Jj-y2VKai_wVX4ZnEDwmMmNHb7nbDSJUKjFPDX49KgLwP2_DElUqF0PESZGgn11fabwEptU8W-vBby8zOxAufJrWMqBpQewsvDZERTtzxVUEY`
            }
        }).then(res => res.data.album.images[0].url)
        .then(response => {
            setImages([...images, response])
            
        })  
    },[])

    return (
        <div className='flex flex-col rounded-xl p-3 group hover:bg-gray-300 hover:bg-opacity-10 border-[1px] border-slate-600'>
            <div className='flex items-center justify-between'>
                <div className='space-x-4 flex items-center'>
                    <PlayArrowIcon className='text-gray-600 mr-4 opacity-0 group-hover:opacity-95 group-hover:text-white' />
                    <Image src={images[number + 1] || "https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be"} width={40} height={40}/>
                    <div className='flex flex-col items-start'>
                        <span className='text-white text-sm font-semibold truncate w-36'>{artist_name}</span>
                        <span className='text-gray-400 group-hover:text-white text-sm truncate w-36'>{track_name}</span>
                    </div>
                </div>
                <div>
                    <FavoriteBorderIcon onClick={handleAddSong} className='text-gray-600 mr-2 group-hover:text-white' />
                </div>
            </div>
            
        </div>
    )
}
