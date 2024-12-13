import React, {Component} from "react";

export function Greeting(props) {
    // props.message = "new message";
    return (
        <h6>Greeting: [Title:{props.title} Header:{props.header} - {props.subHeader} ] <br />from {props.message} </h6>
    )
}

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                style={{
                    border: "1px solid black",
                    padding: "5px",
                    margin: "10px",
                    boxShadow: "10px 10px 10px 10px gray"
                }}>
                <p>This is from class component</p>
                <p>Hello World!!</p>
                <button onClick={this.props.childHandleClick} type="button">Change greeter</button>
                <Greeting message={this.props.message} />
            </div>
        )
    }
}

