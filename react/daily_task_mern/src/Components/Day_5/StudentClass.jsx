import  { Component } from "react";

class StudentClass extends Component {

  constructor() {
    super();
    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    console.log("Render Called");

    return (
      <div className=" text-2xl font-bold text-center flex justify-center items-center mt-30 ">
        <h1>Lifecycle Methods Example</h1>
      </div>
    );
  }
}

export default StudentClass;