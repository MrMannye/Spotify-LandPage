import React, { useContext, useRef, useState } from 'react'
import s from '../styles/skills.module.css'
import { ScrollContext } from '../utils/scroll-observer';


const opacityForBlock = (sectionProgress, blockNo) => {
    const progress = sectionProgress - blockNo;
    if(progress >= 0 && progress < 1) {return 1}
    return 0.2
}

const Skills = () => {
    
    const {scrollY} = useContext(ScrollContext);
    const refContainer = useRef(null)

    const numOfPages = 3
    let progress = 0

    const {current: elContainer} = refContainer
    if(elContainer){
        const{clientHeight, offsetTop} = elContainer;
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }

    return(
        <div ref={refContainer} className='bg-black text-white'>
            <div className='min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col  justify-center items-center text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold'>
                <div className='leading-[1.15]'>
                    <div className={s.skillText} style={{opacity: opacityForBlock(progress,0)}}>We know our tools inside out.</div>
                    <span style={{opacity: opacityForBlock(progress,1)}} className={`${s.skillText} inline-block after:content-['_']`}>Our team has contributed 123 commits to React core, powering thousands of apps worldwide. </span>
                    <span style={{opacity: opacityForBlock(progress,2)}} className={`${s.skillText} inline-block`}>We&apos;re maintaining some of the most popular open-source projects, with over <strong>1,234</strong> downloads </span>
                </div>
            </div>
        </div>
    )
}

export default Skills