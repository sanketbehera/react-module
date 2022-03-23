import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useRef, useState, useEffect } from 'react';

var MfeButton = function MfeButton(props) {
  var timerHandle = useRef(null);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      stateCounter = _useState2[0],
      setStateCounter = _useState2[1];

  useEffect(function () {
    timerHandle.current = +setInterval(function () {
      setStateCounter(stateCounter + 1);
    }, 1000);
    return function () {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  });
  var propsCounter = props.counter,
      onClick = props.onClick;

  var handleClick = function handleClick() {
    if (onClick) {
      onClick();
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Props counter: ", propsCounter, /*#__PURE__*/React.createElement("span", {
    onClick: handleClick
  }, "click to increase")), /*#__PURE__*/React.createElement("div", null, "State counter: ", stateCounter));
};

export { MfeButton as default };
