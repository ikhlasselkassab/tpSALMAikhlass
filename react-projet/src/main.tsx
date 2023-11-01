import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import PersonalInfo from './PersonalInfo.tsx';
import ProfessionalObjectiveForm from "./ProfObj";
import Education from "./Education";
import Skills from "./Skills";
import './index.css'
import './index1.css'


function init(){
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <button onClick={other} className='Buttonload'>Suivant</button>
  </React.StrictMode>,
)}
init();
function other(){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <PersonalInfo />
      <button onClick={other1} className='Buttonload'>Suivant</button>
    </React.StrictMode>,
  )}
function other1(){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ProfessionalObjectiveForm />
      <button onClick={other} className='Buttonload'>Précédent </button>
      <button onClick={other2} className='Buttonload'>Suivant </button>
      
    </React.StrictMode>,
    )}
function other2(){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Education/>
        <button onClick={other1} className='Buttonload'>Précédent</button>
        <button onClick={other3} className='Buttonload'>Suivant</button>
    </React.StrictMode>,
    )}
function other3(){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Skills/>
          <button onClick={init} className='Buttonload'>Submit</button>
        </React.StrictMode>,
      )}
