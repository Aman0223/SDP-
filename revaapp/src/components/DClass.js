import React,{Component} from "react";


class MyClass extends Component{
    constructor(props){
        super(props)
    }
    state= { 
        Greet:"Click The Button"
    }
    greetchange = () => {
        this.setState({Greet:"Welcome  to this Session"})
    }
    render() {
        return (
        <div align="center">
            <h1>Welcome Page</h1>
            <h3>{this.state.Greet}</h3>
            <button type="button"onClick={this.greetchange}>Greet</button>
        </div>
        );
    }
}
export default MyClass;