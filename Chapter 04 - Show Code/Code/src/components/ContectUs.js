import React from "react";

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        console.log(`contact us constructor`);
        this.state = {
            data: {
                name: '',
                bio: '',
                avatar_url: ''
            }
        }
    }
    async componentDidMount() {
        const res = await fetch("https://api.github.com/users/amrithesh-rao");
        const data = await res.json();
        
        this.setState(data);
    }
    render() {
        return (
            <div>
                Its my contacts:
                <div>Name: {this.state.name}</div>
                <div>bio: {this.state.bio}</div>
                <img src={this.state.avatar_url}/>


            </div>
        );
    }
}

export default ContactUs;