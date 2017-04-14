import React, { Component } from 'react';
import Dropdown from 'react-drop-down';
import Checkbox from '../Common/Checkbox';

const jobType = [
  'hotJob',
  'classifiedJob',
  'privateJob',
  'premiumJob',
  'IJP'
];

class SearchComponent extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	keyword: 'All', 
	    	searchType: 'Title'
	    };

	    this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	}

	handleSubmit(event) {
	    alert('A name was submitted: ' + this.state.searchType);
	    event.preventDefault();
	}

    handleInputChange(event) {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	}

	componentWillMount = () => {
		this.selectedCheckboxes = new Set();
	}

	toggleCheckbox = label => {
		if (this.selectedCheckboxes.has(label)) {
		  this.selectedCheckboxes.delete(label);
		} else {
		  this.selectedCheckboxes.add(label);
		}
	}

	handleFormSubmit = formSubmitEvent => {
	    //formSubmitEvent.preventDefault();

	    for (const checkbox of this.selectedCheckboxes) {
	      console.log(checkbox, 'is selected.');
	    }
	}

	createCheckbox = label => (
	    <Checkbox label={label} handleCheckboxChange={this.toggleCheckbox} key={label} name="jobType[]"/>
	)

	createCheckboxes = () => (
	    jobType.map(this.createCheckbox)
	)
	
    render() {
      return (
         <form onSubmit={this.handleFormSubmit} method="POST">
         	<h1>Search Jobs</h1>
            <input type = "text" value = {this.state.keyword} name="keyword"
               onChange = {this.handleInputChange} />
            <Dropdown value={this.state.searchType} onChange={this.handleInputChange} options={[ 'JobId', 'Title', 'Ref Code' ]} />
            <h4>Searching for {this.state.keyword} in {this.state.searchType}</h4>

            {this.createCheckboxes()}
	        <input type="submit" value="Search" />
	      </form>
      );
   }
}

export default SearchComponent;