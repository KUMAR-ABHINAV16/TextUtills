import React, {useState} from 'react';



export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase("you have clicked on handleUpclick");
    setText(newText);
    props.showAlert("Converted to uppercase" , "success");
  }

  const handleoffClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase" , "success");
  }
  const handleclear =()=>{
    let newText = ' ';
    setText(newText);
    props.showAlert("Text is cleared" , "success");
  }

  const handlecopy =() =>{
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Coppied to clipboard" , "success");

  }

  // event mil jata hai jab hum textarea me kuch event ko listen karte hai tab
  const handleOnChange= (event)=>{
    // console.log("Uppercase was clicked");
    // new value ko set kar derahe hai target ki help se
   
    setText(event.target.value);  
  }
  
  const [text, setText] = useState('');
  
  return (
   <>
<div className="container" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
        {/* how to call props */}
            <h1>{props.heading}</h1>   
            <div className="mb-3">
            <textarea className="form-control"  onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode === 'light' ? 'white' : '#13466e' , color: props.mode === 'light' ? '#042743' : 'white'}}  value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}> Convert to Uppercase</button>
      <button className="btn btn-primary mx-1  my-1" onClick={handleoffClick}> Convert to Lowercase</button>
      {/* <button className="btn btn-primary mx-3 " onClick={hndlebold}> Convert to Bold</button> */}
      <button className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}> Copy Text</button>
 
    </div>

    <div className="container my-3"  style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
       <h2><u>Your text summary</u></h2>
       {/* how to not count spaces =>  by fliter method , jiska length 0 hai yo add nahi hoga */}
       <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters </p>
       <p>{0.008 * text.split(" ").length} Minutes to read</p>
       <h2> <u>Preview</u> </h2>
       <p>{text.length>0 ? text : "Enter something in the textabove to preview it here."}</p>
    </div>

   </>
    
  )
}



