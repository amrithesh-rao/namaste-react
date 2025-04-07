import { Component } from "react";
import Children1 from "./Children1";
import Children2 from "./Children2";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { // its called first time after html mounts
    this.timer = setInterval(()=>{
        console.log(`setInterval called after 1sec`);
    }, 1000);
  }

  componentWillUnmount() { //its used for cleanup purpose when component unmounts
    console.log(`componentWill Unmount called`);
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        Its about my food app.
        <Children1 name="Amrithesh" location="Bangalore" />
        <Children2 name="Shanthi" location="Heaven" />
      </div>
    );
  }
}

export default About;
