import React from 'react'
import Video from "./Video.jsx"

import anciano from "./anciano.mp4"
import mujer from "./../static/videos/womanbetweenfour.mp4"
import ifyourepacific from "./../static/videos/ifyourepacific.mp4"
import patada from "./../static/videos/patada.mp4"
import girlKnocked from "./../static/videos/girl.mp4"
import police from "./../static/videos/tucuman1.mp4"

const VistaVideos = (props) => {


    return (
        <div className="main-videos">
            <div className="Videos">
                <div className="col-1">
                    <Video name={anciano}/>
                    <Video name={mujer}/>
                    <Video name={ifyourepacific}/>
                </div>
                
                <div className="col-2">
                    <Video name={patada}/>
                    <Video name={girlKnocked}/>
                    <Video name={police}/>
                </div>
            </div>
        </div>
    )
}

export default VistaVideos