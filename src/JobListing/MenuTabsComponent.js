import React, {
    Component
} from 'react';
import TabPanel, {
    TabBody,
    TabStrip
} from 'react-tab-panel'
import 'react-tab-panel/index.css'

export default () => {
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
        /div> <
        /TabBody> <
        /TabPanel>
}

class JobOperationsComponent extends Component {
  getJobList() {
      /*var newJobArray = {
          "jobId": "2130417005901",
          "title": "1React Js 1 Developer",
          "numResponses": "231",
          "refCode": "1Tech4412322"
      }
      var JobList =new Array();//this.state.data;
      JobList.push(newJobArray);
      this.setState({
          data: JobList
      })*/
  };

    render() {
        return ( <
            div className = "GlobalMJRMenu" > <
            ul >
            <
            li > < a href = ""
            onClick = {
                this.getJobList('All')
            } > All Jobs < /a> < /li > <
            li > < a href = ""
            onClick = {
                this.getJobList('Eapps')
            } > Eapps < /a> < /li > <
            li > < a href = ""
            onClick = {
                this.getJobList('CSM')
            } > CSM < /a> < /li > <
            li > < a href = ""
            onClick = {
                this.getJobList('OMJ')
            }> OMJ < /a> < /li > <
            li > < a href = ""
            onClick = {
                this.getJobList('Emails (CSM)')
            }> Emails(CSM) < /a> < /li > <
            li > < a href = ""
            onClick = {
                this.getJobList('Emails (Eapps)')
            }> Emails(Eapps) < /a> < /li > < /
            ul ></div>
        );
    }
}

class SavedJobsComponent extends Component {
    render() {
        return ( <
            div > <
            ul >
            <
            li > Saved Jobs < /li> <
            li > Auto Saved Jobs < /li>< /
            ul > <
            /div>
        );
    }
}
