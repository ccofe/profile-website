import React from 'react'
import '../../static/css/top-section.css'

export default function TopSection(props) {
    return (
        <div class='intro__main'>
            <div class='intro__shade'></div>
            <h1>Chris Cofelice</h1>
            {/* <img src={props.profile.picture} class='profile-pic'/> */}
            <a href={props.profile.resume} target="_blank" rel="noopener noreferrer">
            <div class='resume'>Resume</div>
            </a>
        </div>
    )
}

