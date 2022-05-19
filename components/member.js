import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Member = ({id,name,socialId, link}) => (
    <div>
        <Image src={`/assets/team/${name}.svg`} alt="Image Team" width={1366} height={1555}/>
        <div className='text-2xl xl:text-3xl text-gray-500'>{name}</div>
        <div className='text-sm hover:opacity-70 hover:scale-105 text-blue-500'>
            <Link href={link}><a target="_blank">{socialId}</a></Link>
        </div>
    </div>
)

export default Member;
