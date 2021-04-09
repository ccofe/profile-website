import React from 'react'
import '../../static/css/top-section.css'

export default function TopSection(props) {
    return (
        <div class='intro__main'>
            <div class='intro__shade'></div>
            <h1>Chris Cofelice</h1>
            {/* <img src={props.profile.picture} class='profile-pic'/> */}
            <a href="https://github.com/ccofe" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-github fa-2x github-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/christopher-cofelice-8080262a" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-linkedin-square fa-2x linkedin-icon"></i>
            </a>
            <a href={props.profile.resume} target="_blank" rel="noopener noreferrer">
                <div class='resume'>Resume</div>
            </a>
        </div>
    )
}

