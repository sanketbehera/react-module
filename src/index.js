import React, {
    useState,
  } from 'react';
  
  const MfeButton = (props) => {
    const [result, setResult] =
      useState(0);
  
      const fromMfe=(data)=>{
        props.checkMe(data);
      }
  
    return (
      <div>
        <button
          onClick={(e) => {
            setResult(result+1),
             fromMfe(result)
          }}>
          MFE1 Button
        </button>
        <br></br>
        <span>{result}</span>
      </div>
    );
  };
  
  export default MfeButton;
  