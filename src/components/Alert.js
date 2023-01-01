import React from 'react';

function Alert(props) {

    // to make 1st word capital
    const capital = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // if props.alert will null the next part we will not get , and if not null then we will get next part
    <div style={{height: '50px'}}>
        {props.alert  &&   <div className={`alert alert-${props.alert.type   } alert-dismissible fade show`}role="alert">
    <strong> {capital(props.alert.type)}</strong> :  {props.alert.msg}
       
    </div>}
    </div>
  );
}

export default Alert;




