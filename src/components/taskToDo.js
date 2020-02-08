import React, { Component } from 'react';
import uuid from 'uuid'
import './styleDashborad.css'
import { render } from '@testing-library/react';

class taskToDO extends Component {
    constructor(props) {
        super(props)
    
       this.input=React.createRef()
       this.state={
           list:[],
          }
    }

    addTask=()=>{
    
    const Items={
            id:uuid.v4(),
            value:this.input.current.value,
            Date: new Date().toUTCString()
        };

        if(localStorage.getItem('list')==null){
            const list=[]
            list.push(Items);
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list",JSON.stringify(list))
        }
        this.setState({
            list:JSON.parse(localStorage.getItem('list'))
        });
    }

    componentDidMount() {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if(list == null){
            return false
        }
        else{
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list);
        }
    }
    
    deleteItem=(event)=> {
        
        let index = event.target.getAttribute('data-key')
        let listValue=JSON.parse(localStorage.getItem('list'));
        listValue.splice(index,1)
        this.setState({list:listValue});
        localStorage.setItem('list',JSON.stringify(listValue))
    }

    
    
    render() {
        return (
            <div className="mt-5 text-center">
                <div className="container bg-warning mt-5 pd-5">
                    <input type="text" placeholder="Add Notifications" ref={this.input}></input>
                        <button onClick={this.addTask} className="button" >Add</button>
                            <table>
                                {
                                    this.state.list.map((item,index)=>
                                    {
                                        return(
                                        <th key={item.id}> {item.value}
                                        <th><button className="button" type="button" value="delete" data-key={index} onClick={this.deleteItem}>Delete</button></th>
                                        </th>
                                        )
                                    })
                                } 
                            </table>
                </div>
                
            </div>
        )
    }
}
export default taskToDO;