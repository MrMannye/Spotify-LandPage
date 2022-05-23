import React from 'react'
import { TileWrapper, TileBackground, TileContent, Tile } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work'
import Image from 'next/image'

const Works = () => {
    return (
        <TileWrapper numofPages={3}>
            <TileBackground>
                <WorkBackground></WorkBackground>
            </TileBackground>
            <TileContent>
                <Tile page={0} renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We built</div>
                            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Pink Panda&apos;s app</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image src='/assets/works/pinkpanda.webp' alt='Image Work' layout='responsive' width={440} height={800}></Image>
                        </WorkRight>
                    </WorkContainer>
                )}></Tile>
                <Tile page={1} renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We made</div>
                            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Steakwallet&nbsp;faster.</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image src='/assets/works/steakwallet.webp' alt='Image Work' layout='responsive' width={440} height={800}></Image>
                        </WorkRight>
                    </WorkContainer>
                )}></Tile>
                <Tile page={2} renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We helped</div>
                            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Showtime ship&nbsp;faster.</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image src='/assets/works/showtime.webp' alt='Image Work' layout='responsive' width={440} height={800}></Image>
                        </WorkRight>
                    </WorkContainer>
                )}></Tile>
            </TileContent>
        </TileWrapper>
    )
}

export default Works