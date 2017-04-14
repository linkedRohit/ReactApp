import React from 'react';
import ReactDOM from 'react-dom';
//import JobListing from './JobListing';
import JobListing from './JobListing/JobListing';
import './index.css';

ReactDOM.render( <
    JobListing appProp = "Eapps" / > ,
    document.getElementById('JobListing')
);

//unmount the component after specified duration
/*setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('JobListing'))
}, 5000);*/
