import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import { type } from '@testing-library/user-event/dist/type';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

const [mode,setMode] = useState('light');
 const [alert , setAlert] = useState(null);

 const showAlert = (message, type) =>{
  setAlert({
    msg: message,
    type: type
  })
 setTimeout(() => {
    setAlert(null);
 }, 2000);


 }

const toggleMode = ()=>{
  if(mode === 'light' )
  {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled" , "success");
    document.title ='TextUtils - Dark Mode';
    }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled" , "success");
    document.title ='TextUtils - Light Mode';
  }
}


  return (
    <>
    
     <Navbar title="Textutils"  mode={mode}  toggleMode={toggleMode}  />
     <Alert   alert={alert} />
     <div className="container my-3">
     <TextForm  heading="Enter the text to analyse below" mode={mode}  showAlert={showAlert}/>
    </div>
    
  
    </>
  );
  }
export default App;
