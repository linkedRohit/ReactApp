import React, {
 Component
}
from 'react';
import TabPanel, {
 TabBody,
 TabStrip
}
from 'react-tab-panel';
import 'react-tab-panel/index.css';
import axios from 'axios';

class MenuTabsComponent extends Component {
  constructor(props) {
    console.log(props, 123);
   super(props);
  }
  updateJobs(field, value) {
    var newState = {};
    newState[field]=value;
    this.setState(newState);
  }
  getJobList(respType) {
   axios.get(`http://www.reddit.com/r/${respType}.json`).then(res => {
    const newJobs = res.data.data.children.map(obj => obj.data);
    console.log(newJobs);
    return this.updateJobs('jobs', newJobs);
   });
  }

render() {
 return <TabPanel theme = "default"
 tabAlign = "start"
 onActivate = {
  (index) => console.log('Tab ' + index + ' was activated!')
 } >

 <
 TabBody style = {
  {
   padding: 10
  }
 } >
 <
 div tabTitle = "Jobs and Responses"
 id = "JobsAndResponses" >
 <
 JobOperationsComponent / >
 <
 /div> <
 div tabTitle = "Saved Jobs"
 id = "SavedJobs" >
 <
 SavedJobsComponent / >
 <
 /div><div>< a href="javascript:void(0)"
  onClick = {
   () => this.getJobList.bind(this, 'All')
 } > All Jobs < /a></div> < / TabBody > <
 /TabPanel>

 }
}

export default MenuTabsComponent;

class JobOperationsComponent extends Component {
 constructor(props) {
  super(props);
 }

 updateJobs(field, value) {
   var newState = {};
   newState[field]=value;
   this.setState(newState);
 }

 getJobList(respType) {
  axios.get(`http://www.reddit.com/r/${respType}.json`).then(res => {
   const newJobs = res.data.data.children.map(obj => obj.data);
   console.log(newJobs);
   return this.updateJobs('jobs', newJobs);
  });
 }

 render() {
  return ( < div className = "GlobalMJRMenu" > < ul > < li > < a href="javascript:void(0)"
   onClick = {
    () => this.getJobList.bind(this, 'All')
  } > All Jobs < /a> < /li > < li > < a href="javascript:void(0)"
   onClick = {
    this.getJobList.bind(this, 'cricket') //Eapps
  } > Eapps < /a> < /li > < li > < a href = "javascript:void(0)"
   onClick = {
    this.getJobList.bind(this, 'Soccer')
  } > CSM < /a> < /li > < li > < a href = "javascript:void(0)"
   onClick = {
    this.getJobList.bind(this, 'Billiards') //OMJ
  } > OMJ < /a> < /li > < li > < a href = "javascript:void(0)"
   onClick = {
    this.getJobList.bind(this, 'Pool') //Emails (CSM)
  } > Emails(CSM) < /a> < /li > < li > < a href = "javascript:void(0)"
   onClick = {
    this.getJobList.bind(this, 'Rugby') //Emails (Eapps)
   } > Emails(Eapps) < /a> < /li > < /
   ul > < /div >);
  }
 }

 class SavedJobsComponent extends Component {
  render() {
   return ( < div > < ul > < li > Saved Jobs < /li> <
    li > Auto Saved Jobs < /li > < /
    ul > <
    /div >);
   }
  }
