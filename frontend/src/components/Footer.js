import React, {Component} from 'react'
import '../../static/css/footer.css'
// import Popup from 'Popup.js'


export default function Footer(props) {
  
    let onAboutMe = (params) => {
      let modal = document.getElementById('modal');
      modal.style.display = 'block';
      let modalContent = document.getElementById('modal-content');
      modalContent.innerHTML = props.profile.about
    }

    
    let onAboutSite = (params) => {
      let modal = document.getElementById('modal');
      modal.style.display = 'block';
      let modalContent = document.getElementById('modal-content');
      modalContent.innerHTML = props.site.about
    }

    return (
      <div class="footer">
          
          <p class='footer__aboutme' onClick={onAboutMe}>About Me</p>
          <p class='footer__aboutsite' onClick={onAboutSite}>About This Page</p>
          <a href="https://github.com/ccofe" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github github-icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/christopher-cofelice-8080262a" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-linkedin-square linkedin-icon"></i>
          </a>
      </div>
    );

    
  }