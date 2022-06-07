import React from 'react'
import Member from './member';

const AboutUs = () => {
    
    const teams = [
        {
            id: 1,
            name: "Miguel",
            link: "https://github.com/MrMannye",
            socialId: "@mannye"
        },
        {
            id: 2,
            name: "Francisco",
            link: "https://github.com/MrMannye",
            socialId: "@franky"
        },
        {
            id: 3,
            name: "Zuriel",
            link: "https://github.com/MrMannye",
            socialId: "@rexzu"
        },
        {
            id: 4,
            name: "Thomas",
            link: "https://github.com/MrMannye",
            socialId: "@mannye"
        },
    ];
    
    return(
        <section className={`flex flex-col bg-white py-20 text-2xl md:text-3xl`}>
            <div className='container mx-auto px-11'>
                <p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight'>
                    <strong>We will help you ship better apps, faster. </strong>
                    Our team of expert engineers has created the best user experiences in some of 
                    the most popular apps worldwide
                </p>
            </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <h2 className='font-semibold'>Our Team!</h2>
                <div>The &ldquo;spec-ops&rdquo;</div>
                <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-20'>
                    {teams.map(team => {
                        return(
                            <Member socialId={team.socialId} key={team.id} id={team.id} name={team.name} link={team.link}></Member>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default AboutUs