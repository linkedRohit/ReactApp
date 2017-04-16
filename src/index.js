import React from 'react';
import ReactDOM from 'react-dom';
//import JobListing from './JobListing';
import JobListing from './JobListing/JobListing';
import './index.css';
import FetchJobsComponent from './JobListing/FetchJobsComponent'

ReactDOM.render( <
    JobListing defaultJobType = "All" / > ,
    document.getElementById('JobListing')
);

//unmount the component after specified duration
/*setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('JobListing'))
}, 5000);*/
