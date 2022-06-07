import React, {useEffect, useState} from 'react'
import Playlists from '../components/Playlists'
import Header from '../components/Header'
import Songs from '../components/Songs'
import Head from 'next/head'
import { useSelector } from "react-redux";
import {useRouter} from 'next/router'

function Musics() {
    
    const admin = useSelector((state) => state.login.admin);
    const [loading, setLoading] = useState(true)
    const router = useRouter();
    
    useEffect(() => {
        if(admin !== 0){
            router.push('/');
        }
    })
    
    return (
        <div className=' bg-black min-h-screen flex flex-col mx-auto'>
            <Head>
                <title>Songs SEA</title>
            </Head>
            <div className='mb-16'>
                <Header/>
            </div>
            <Playlists/>
            <Songs/>
            
        </div>
    )
}

export default Musics