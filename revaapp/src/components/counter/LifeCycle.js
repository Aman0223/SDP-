import React,{Component} from "react";
class LifeCycleMethod extends Component {
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        console.log('the Component Is Going To get Mounted With componentWillMount');
        
    }
    componentDidMount() {
        console.log('The Component Is now Mounted With componentDidMount');

    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUnmount() {
        console.log('The Component will now Unmount With ComponentWillUnmount ')
        
    }
}