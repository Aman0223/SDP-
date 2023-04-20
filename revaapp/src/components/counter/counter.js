import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        count:0
     }
     increment = () =>{
        this.setState({count:this.state.count +1})
     }
     decrement = () =>{
        if(this.state.count==-1){
            this.setState({count:this.state.count})
        }
        else{
        this.setState({count:this.state.count -1})
        }
    }
    render() { 
        return ( 
            <div align="center">
                <h3>Counter</h3>
                <br />
                <h1>{this.state.count}</h1>
                <br />
                <br />
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
         );
    }
}
 
export default Counter;
