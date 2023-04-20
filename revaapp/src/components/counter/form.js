import React, { Component } from 'react';
class ControlledForm extends Component {
    constructor(props) {
        super(props);

    
    this.state = {    
    name: '',
    email: '',
    password: '',
    }
}
    
    handleChange =(e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    state = {  }
    render() { 
        const { name, email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                    type="name"     
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    />

                </label>
                <br />
                <label> 
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    />
                    
                </label>
                <br />
                    <button type="submit">Submit</button>
            </form> 
        );
           
        }
    }

 
export default ControlledForm;