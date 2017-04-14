import React from 'react';
import ReactDOM from 'react-dom';
import JobListing from './JobListing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobListing />, div);
});
