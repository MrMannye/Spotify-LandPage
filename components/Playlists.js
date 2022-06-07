import React from 'react'
import Card from './Card'

export default function Playlists({data}) {
  return (
    <div className='p-8 w-11/12 mx-auto text-white'>
        <h1 className='font-semibold text-2xl mb-6 pl-2'>Top PlayList's in Spotify</h1>
        <div className='grid grid-cols-3 grid-rows-2'>
          <Card title="POP" balance={409} icon={0} />
          <Card title="MAS ESCUCHADAS" balance={100} icon={2} />
          <Card title="CLAIMABLE REWARD" balance={100} icon={1} />
          <Card title="SONIDERO" balance={339} icon={3} />
          <Card title="POP" balance={409} icon={0} />
          <Card title="REGGETON" balance={339} icon={0} />
        </div>
    </div>
  )
}


