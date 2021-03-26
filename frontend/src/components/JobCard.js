import React, {Component} from 'react'
import '../../static/css/job-card-left.css'
import '../../static/css/job-card-right.css'


export default function JobCard(props) {

  let onAbout = (params) => {
    console.log('onAbout')
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
    let modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = props.job.summary
  }
  
  return (
    <div class="card-left" onClick={onAbout}>
        <img src={props.job.image} alt="Image"></img>
        
        <div class="card-left__glass">
            
            <h1>{props.job.title}</h1>
            <h3>{props.job.company}</h3>
            <p>{props.job.dates}</p>
        </div>
    </div>
  );
}

