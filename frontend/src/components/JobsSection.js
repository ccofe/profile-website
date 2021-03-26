import React from 'react'
import JobCard from './JobCard'
import Grid from "@material-ui/core/Grid";
import '../../static/css/jobs-section.css'

export default function JobsSection(props) {
    
    
    // cardArray = props.jobs.map(a => {
    //     return (
    //     // <Grid item>
    //     //     <JobCard job={a} />
    //     // </Grid>
    //     <JobCard job={a} use-class='left'/>
    //     )
    // });

    let cardArray = [];
    for (let ind=0;ind<props.jobs.length;ind++){
        if (ind%2){
            cardArray.push(<JobCard job={props.jobs[ind]} use-class='left'/>);
        } else{
            cardArray.push(<JobCard job={props.jobs[ind]} use-class='left'/>);
        }
    }

    return (
        <div class='jobs-section-main'>
            {/* <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                background-color="grey">

                { cardArray }
                
            </Grid> */}
            { cardArray }
        </div>
    )
}

