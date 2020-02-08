import React, { Component } from 'react';
import StudentDetail from '../components/StudentDetail';

import { Route } from "react-router-dom";

const student= [
        {
            name:"Suraj Singh",
            attendance:"100",
            rollNo:"01IT"
        },
        {
            name:"Sam",
            attendance:"100",
            rollNo:"02IT"
        },
        {
            name:"Rahul",
            attendance:"100",
            rollNo:"03IT"
        },
        {
            name:"Virat",
            attendance:"100",
            rollNo:"04IT"
        },  
        {
            name:"Arun",
            attendancet:"90",
            rollNo:"05IT"
        },
        {
            name:"Mayak",
            attendance:"90",
            rollNo:"06IT"
        },  
        {
            name:"Shubham",
            attendance:"80",
            rollNo:"07IT"
        },
        {
            name:"Honey",
            attendance:"100",
            rollNo:"08IT"
        },  {
            name:"Arpit",
            attendance:"75",
            rollNo:"09IT"
        },
        {
            name:"Suraj Singh",
            imgUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            attendance:"100",
            rollNo:"01ME",
            year:"4th Year"
        },
        {
            name:"Sam",
            imgUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            attendance:"100",
            rollNo:"02ME",
            year:"4th Year"
        },
        {
            name:"Rahul",
            imgUrl:"https://images.unsplash.com/photo-1559933240-941267a02c9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            attendance:"100",
            rollNo:"03IT",
            year:"1st Year"
            
        },
        {
            name:"Virat",
            imgUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            attendance:"100",
            rollNo:"04ME",
            year:"2nd Year"
            
        },  
        {
            name:"Arun",
            imgUrl:"https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            attendance:"90",
            rollNo:"05ME",
            year:"4th Year"
        },
        {
            name:"Mayak",
            imgUrl:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            attendance:"90",
            rollNo:"06ME",
            year:"3rd Year"
        },  
        {
            name:"Shubham",
            imgUrl:"https://images.unsplash.com/photo-1553198006-8f63e9ee0ae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            attendance:"80",
            rollNo:"07ME",
            year:"4th Year"
        },
        {
            name:"Honey",
            imgUrl:"https://images.unsplash.com/photo-1542458580-9d880e2a6bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            attendance:"100",
            rollNo:"08ME",
            year: "3rd year"
        },  {
            name:"Arpit",
            imgUrl:"https://images.unsplash.com/photo-1564866657311-e9cc905d29cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            attendance:"75",
            rollNo:"09ME",
            year:"4th Year"
        }

    ]

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase())||!term;
    }
}

class FliterSearch extends Component {
    constructor(props){
        super(props)
            this.state = {
                student:student,
                term: '',
        }

        this.searchHandler =this.searchHandler.bind(this);
    }
    searchHandler(event){
        this.setState({term: event.target.value})
    }
    render() { 
        const {term, student} = this.state;
        return(
            <div className="display container mt-1 p-2 bg-dark col-8 text-white">
                <h1>List of Student</h1>
                <from>
                    <input className="text-center" placeHolder="Search" type='text' onChange={this.searchHandler}value={term}/>
                </from>
                { student.filter(searchingFor(term)).map( student => 
                            <div>
                                <table className="offset-0">
                                    <th>{'Name: '}{student.name}</th>
                                </table>
                                <table className="offset-0">
                                    <td>{"Attendance: "}{student.attendance}{'%'}</td>
                                </table>
                                <table className="offset-0">
                                    <td>{"Roll No: "}{student.rollNo}</td>
                                </table>
                                <br/>
                            </div>
                        )
                }
            </div>
        )
    }
}
export default FliterSearch;