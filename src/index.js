import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {Greeting} from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // CUSTOM COMPONENT - App 
  //JSX rules: 
  //1. There should be only one top-level element/tag in each render
  //2. React Fragment which is defined using <> </>
  //3. Every React Component should be Pascal-Cased and never camel cased
  //4. lower-cased/camel-cased element names are reserved for HTML elements
    
  <App />  


    //App component renders() to produce HTML elements 
    //React plugs in the generated HTML into the Browsers' DOM 
    //The moment the Browser DOM is updated, the browser will re-render the DOM
    //Re-rendering HTML DOM refreshes the page. 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
