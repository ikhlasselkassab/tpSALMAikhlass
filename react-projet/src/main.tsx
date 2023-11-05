import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import App1 from './App1.tsx'
import './index.css'
import './index1.css'


const root = ReactDOM.createRoot(document.getElementById('root')!)

function init(){
 root.render(
    <React.StrictMode>
      <App />
      <button onClick={other} className='Buttonload'>Suivant</button>
    </React.StrictMode>,
 )
}
init();

function other(){
  root.render(
     <React.StrictMode>
       <App1 />
       
     </React.StrictMode>,
  )
 } 




