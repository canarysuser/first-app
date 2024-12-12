import React, {Component, useState} from 'react';

import './App.css';
import ProductHome from './products/productHome';


function App() {
  const [title, setTitle] = useState('First App'); 
  const [greeter, setGreeter] = useState('ABB');
  const [pageDesc, setPageDesc] = 
    useState({title:'Title', header:'Header', subHeader:'subHdr'})

  const baseHandleClick = (e)=>{
    e.preventDefault(); 

    if(greeter=="ABB") setGreeter("Hitachi"); 
    else setGreeter("ABB"); 
  }

  return (
    <div>
      {/* 
      <h2>From App component</h2>
      <p>
        This is a paragraph. 
      </p>
      <hr/> 
      <h5>Page title: {title}</h5>
      <hr/>
      
      <Greeting message={greeter} {...pageDesc}/>
      <HelloWorld message={greeter} childHandleClick={(e)=>baseHandleClick(e)}/> 
      */}
      <ProductHome/>
    </div>
  );
}

export function Greeting(props) {
 // props.message = "new message";
  return (
  <h6>Greeting: [Title:{props.title} Header:{props.header} - {props.subHeader} ] <br/>from {props.message} </h6>
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
          padding:"5px",
          margin: "10px",
          boxShadow:"10px 10px 10px 10px gray"
        }}>
          <p>This is from class component</p>
          <p>Hello World!!</p>
          <button onClick={this.props.childHandleClick} type="button">Change greeter</button>
          <Greeting message={this.props.message}/>
        </div>
      )
    }
}


export default App;
