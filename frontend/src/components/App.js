import React, { Component } from 'react';
import { render } from "react-dom";
import axios from 'axios'
import JobCard from './JobCard'
import TopSection from './TopSection'
import JobsSection from './JobsSection';
import Footer from './Footer';
import Modal from './Modal';

export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            me: null,
            site: null,
            jobs: null
        }
        
        this.getJobs()
        this.getMe()
        this.getSite()
        
    }
    render() {

        if (this.state.jobs === null || this.state.me === null || this.state.site === null){
            return <div></div>
        }
        
        
        
        return (
            <div>
                
                <Modal profile={this.state.me[0]} site={this.state.site[0]}/>
                <TopSection profile={this.state.me[0]}/>
                <JobsSection jobs={this.state.jobs}/>
                <Footer profile={this.state.me[0]} site={this.state.site[0]}/>
                

            </div>
        )
    }
// onClick={() => this.buttonPressed()}
    getJobs = () => {
        
        // fetch('http://localhost:8000/api/job-view').then(res => res.json()).then(res => console.log(res))
        
            
        axios.get('api/job-view')
            .then(response => {
                this.setState({jobs: response.data})
            })
            .catch( error => {
                // handle error
                console.log(error);
            })
      }

      getMe = () => {
        axios.get('api/me-view')
            .then(response => {
                this.setState({me: response.data})
            })
            .catch( error => {
                // handle error
                console.log(error);
            })
      }

      getSite = () => {
        axios.get('api/site-view')
            .then(response => {
                this.setState({site: response.data})
            })
            .catch( error => {
                // handle error
                console.log(error);
            })
      }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)

