import React from "react";

class Children1 extends React.Component {
    constructor(props) {
        super(props);
        console.log(`children1 constructor`); // first

        this.state = { //can have multiple state variable declared here
            count: 0
        }
    }

    componentDidMount() {
        console.log(`children1 did mount`); // fifth
    }

    componentDidUpdate() {
        console.log(`children1 did update`);
    }

    componentWillUnmount() {
        console.log(`children1 will unmount`);
    }

    render() {
        return (
            <>
                {console.log(`children1 render`)}{/* second*/} 
                <div>Name: {this.props.name}</div>
                <div>Location: {this.props.location}</div>
                <div>Count: {this.state.count}
                    <button onClick={()=>{this.setState({ // cant update state directly need to call setState and then update
                        count: this.state.count+1 // only state mentioned in this call will be updated // reconciliation will happen
                    })}}>Increase count</button>
                </div>
            </>
        )
    }
}
 
export default Children1;