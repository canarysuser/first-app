import React,{useState} from 'react'
import Siteheader from './siteheader'
import { Greeting, HelloWorld } from './Miscellaneous'
import Sitefooter from './sitefooter'

function Home() {
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
            <div className='container'>
                <h2>From App component</h2>
                <p>
                    This is a paragraph.
                </p>
                <hr />
                <h5>Page title: {title}</h5>
                <hr />

                <Greeting message={greeter} {...pageDesc} />
                <HelloWorld message={greeter} childHandleClick={(e) => baseHandleClick(e)} />
            </div>
          
    )
}

export default Home