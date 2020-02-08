import React, { Component } from 'react';

let courses = [
  'Computer Scinece',
  'Information And Technology',
  'Mechanical Engineering'
];

const Student = [
  'Suraj',
  'Arpit',
  'Sytam'
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      search: [],
      name: []
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
    
    else if(this.state.name.length){
    const namePattern = new RegExp(this.state.name.map(term => `(?=.*${term})`).join(''), 'i');
      options = Student.filter(option => 
        option.match(namePattern)
      );
    } 
    else {
      options = courses;
    }
  
    return (
      <div className='display container mt-2 p-5 bg-warning'>
      <div className="List mt-2 p-5 offset-2">
        <h1 > Courses</h1>
        <input type="text" onChange={(e) => this.setState({search: e.target.value.split(' ')})}/>
        <ul>
            {options.map((option, i) => 
              <li key={option+i}>{option}</li>
            )}
        </ul>
      </div>
      <div className="List mt-2 p-5 offset-2">
        <h1 > Student</h1>
        <input type="text" onChange={(e) => this.setState({name: e.target.value.split(' ')})}/>
        <ul>
            {options.map((option, i) => 
              <li key={option+i}>{option}</li>
            )}
        </ul>
      </div>
      </div>
    )
  }
}

export default Dashboard;