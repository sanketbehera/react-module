import React, {
    useState, useEffect, useRef
  } from 'react';
 


  
  const MfeButton = (props) => {

    const timerHandle=useRef(null);

    const [stateCounter, setStateCounter] = useState(0);

      useEffect(()=>{
        timerHandle.current = +setInterval(() => {
          setStateCounter(stateCounter + 1);
        }, 2500);

        return () => {
          if (timerHandle.current) {
            clearInterval(timerHandle.current);
            timerHandle.current = null;
          }
        };

      });
      const {counter: propsCounter, onClick} = props;
      const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };
  
    return (
      <div>
    <div >Props counter: {propsCounter}
      <button onClick={handleClick}
           >click to increase</button>
    </div>
    <div >State counter: {stateCounter}</div>
      </div>
    );
  };
  
  export default MfeButton;
  