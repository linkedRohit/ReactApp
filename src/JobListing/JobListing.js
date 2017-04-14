import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from '../logo.svg';
import './JobListing.css';
import '../Common/common.css';
import SearchComponent from './SearchComponent';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


class JobListing extends Component {
  render() {
    return (
      <div className="JobListing">
        <h4>Loading {this.props.numJobsPerPageProp} {this.props.jobTypeFilter} {this.props.appProp} jobs Jobs per page for {this.props.userFilter} users</h4>

        <h3>Is per page number valid : {this.props.perPageValid(this.props.numJobsPerPageProp)}</h3>
        <Header />
        <GlobalJobOperations />
        <ListOfJobs />
        <SearchComponent />
        <ErrorBroadCaster />
      </div>
    );
  }
}

JobListing.defaultProps = {
  numJobsPerPageProp: "20",
  listingType: "All",
  userFilter: "All",
  jobTypeFilter: "All",
  propArray: [1,2,3],
  perPageValid: function (e) { if(e) return e; else return 'All';}
}

JobListing.propTypes = {
   propArray: PropTypes.array.isRequired,
   perPageValid: PropTypes.func
}

class GlobalComponentLoader extends Component {
  render() {
    return (
      <div className="loader">
        <GlobalLayer />
        <span className="loaderGIF"></span>
        <span>Your job is refreshing, please wait!</span>
      </div>
    );
  }

}

class GlobalLayer  extends Component {
  render() {
    return (
      <div className="layer"></div>
    );
  }

}

class ErrorBroadCaster extends Component {
  render() {
    return (
      <div className="notificationBar hideMe10">
        <span className="icon fl"></span>
        <div className="message fl">Your job has been refreshed. It will be on search in next 30 minutes. Click here to edit the job the link will be displaed here</div>
      </div>
    );
  }

}

class Header extends Component {
  render() {
      return (
        <div className="header">        
          <div className="JobListing-header">
            {/*<img src={logo} className="JobListing-logo" alt="logo" />*/}
            <h2>Global navigation bar of naukri</h2>
          </div>
        </div>
      );
  }
}
class GlobalJobOperations extends Component {
  render() {
      return (
         <div>
            <h1>Global operations will be rendered here...</h1>
            <ul>
               <li>All</li>
               <li>Eapps</li>
               <li>CSM</li>
               <li>OMJ</li>
               <li>Email</li>
            </ul>
            {this.props.children}
         </div>
      );
   }
}

class ListOfJobs extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       data: 
       [
          {
             "jobId": "231216005901",
             "title":"Software Engineer",
             "numResponses":"23",
             "refCode":"Tech123012"
          },
      
          {
            "jobId": "230317000001",
             "title":"Business Analyst",
             "numResponses":"120",
             "refCode":"Bus12920"
          },
      
          {
            "jobId": "131216001903",
             "title":"Financial Advisor",
             "numResponses":"59",
             "refCode":"Finan28012"
          }
        ]
      }

      this.refreshJobs = this.refreshJobs.bind(this);
    };
  
    refreshJobs() {
      this.state.isLoading = true;
      var newJobArray = {
           "jobId": "130417005901",
           "title":"React Js Developer",
           "numResponses":"231",
           "refCode":"Tech4412322"
        }
      var JobList = this.state.data;
      JobList.push(newJobArray);
      this.setState({data: JobList})
    };

    render() {
      const {isLoading, data} = this.props; // Injected via connect

    if (isLoading) {
        return <GlobalComponentLoader />;
    }


      this.state.isLoading = false;
      return (
         <div className="MJR fl">
            <h2>Job Listing</h2>
            <p>Jobs will be rendered here!!!</p>
            <div>
               <ul className="listHeading">
                <li className="title">Job Title</li>
                <li >Reference code</li>
                <li>Number of Responses</li>
               </ul>
               <ul className="listingDetails">
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </ul>
               <button onClick = {this.refreshJobs}>Refresh Job List</button>
            </div>
         </div>
      );
   }

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
}

class TableRow extends Component {
   render() {
      return (  
        <ul>
          <li><a href={'http://www.google.com/' + this.props.data.jobId} target="blank">{this.props.data.title}</a><br/></li>
          <li>{this.props.data.refCode}</li>
          <li>{this.props.data.numResponses}</li>         
        </ul>
      );
   }
}

export default JobListing;
