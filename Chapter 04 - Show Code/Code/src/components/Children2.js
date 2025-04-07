import React from "react";

class Children2 extends React.Component {
    constructor(props) {
        super(props);
        console.log(`Children2 constructor`); // third
    }

    componentDidMount() {
        console.log(`Children2 did mount`); // sixth
    }

    render() {
        return (
            <>
                {console.log(`Children2 render`)} {/* fourth */}
                <div>Name: {this.props.name}</div>
                <div>Location: {this.props.location}</div>
            </>
        )
    }
}
 
export default Children2;