import React, {Component} from 'react';
import TabPanel, {TabBody, TabStrip} from 'react-tab-panel';
import 'react-tab-panel/index.css';
import axios from 'axios';

export default() => {
    return <TabPanel theme="default" tabAlign="start" onActivate= { (index) => console.log('Tab ' + index + ' was activated!') }>

        < TabBody style={{
            padding: 10
        }}>
            < div tabTitle="Jobs and Responses" id="JobsAndResponses">
                < JobOperationsComponent/>
                < /div>
                    < div tabTitle="Saved Jobs" id="SavedJobs">
                        < SavedJobsComponent/>
                        < /div>
                            < /TabBody>
                                < /TabPanel>
                                    } class JobOperationsComponent extends Component {constructor(props) {
                                        super(props);

                                        this.state = {
                                            jobs: []
                                        };
                                    }

                                    getJobList(respType) {
                                        axios.get(`http://www.reddit.com/r/${respType}.json`).then(res => {
                                            const jobs = res.data.data.children.map(obj => obj.data);
                                            this.setState({jobs});
                                        });
                                    }

                                    render() {
                                        return (< div className = "GlobalMJRMenu" > < ul > < li > < a href = "" onClick = {
                                            this.getJobList('All')
                                        } > All Jobs < /a> < /li > < li > < a href = "" onClick = {
                                            this.getJobList('Eapps')
                                        } > Eapps < /a> < /li > < li > < a href = "" onClick = {
                                            this.getJobList('Soccer')
                                        } > CSM < /a> < /li > < li > < a href = "" onClick = {
                                            this.getJobList('OMJ')
                                        } > OMJ < /a> < /li > < li > < a href = "" onClick = {
                                            this.getJobList('Emails (CSM)')
                                        } > Emails(CSM) < /a> < /li > < li > < a href = "" onClick = {
                                            this.getJobList('Emails (Eapps)')
                                        } > Emails(Eapps) < /a> < /li > < /
            ul ></div >);
                                    }
}

                                    class SavedJobsComponent extends Component {render() {
                                        return (< div > < ul > < li > Saved Jobs < /li> <
            li > Auto Saved Jobs < /li > < /
            ul > <
            /div >);
                                    }
}
