import React from 'react'
import "./Welcome.css"



const welcome = () => {
    return (
        <div className='flex flex-col justify-center px-10 lg:px-20 xl:px-70 py-20 gap-5 items-center'>
            <div className='enviornment1'>
                <h1 className='heading1'>welcome to the net vr</h1>
                <p className='info1 w-full md:text-3xl text-md'>
                    Experience twitch like never before with The Net Vr.
                    We provide streamers with stunning 3D
                    environments that will captivate and engage their
                    audience. Elevate your streams to the next level and
                    stand out from the crowd
                </p>
            </div>
            <div className='enviornment2'>
                <h1 className='heading2'>IMMERSIVE 3D ENVIRONMENTS</h1>
                <p className='info2 w-full  md:text-3xl text-md'>
                    Experience the next level of entertainment with out
                    cutting-edge 3D environment design specifically for
                    Twitch streamers. Engage your audience like never before
                    and create a truly immersive streaming experience
                </p>
            </div>
            <div className=''>
                <button className="buttonlable" >More About Us</button>
            </div>
        </div>
    )
}

export default welcome