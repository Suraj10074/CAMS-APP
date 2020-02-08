import FliterSearch from './AddFliter';
import React, { Component } from 'react';

let courses = [
  'Computer Scinece',
  'Information And Technology',
  'Mechanical Engineering',
  'AutoMobiles Engineering',
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      search: [],
    }
  }

  render() {
    let options;
    if (this.state.search.length) {
      const searchPattern = new RegExp(this.state.search.map(term => `(?=.*${term})`).join(''), 'i');
      options = courses.filter(option => 
        option.match(searchPattern)
      );
    } 
    else {
      options = courses;
    }
  
    return (
    <div className='display container mt-2 p-5 bg-warning'>
        <div className="List mt-2 p-5 offset-0">
            <h1 > Courses</h1>
            <input className="text-center" type="text" placeHolder=" Search Courses" onChange={(e) => this.setState({search: e.target.value.split(' ')})}/>
            <ul>
                {options.map((option, i) => 
                <p key={option+i}>{option}</p>
                )}
            </ul>
        </div>
        <FliterSearch/>
    </div>
    )
  }
}

export default Dashboard;