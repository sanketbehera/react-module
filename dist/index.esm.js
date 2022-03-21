import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState } from 'react';

var MfeButton = function MfeButton(props) {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var fromMfe = function fromMfe(data) {
    props.checkMe(data);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      setResult(result + 1), fromMfe(result);
    }
  }, "MFE1 Button"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, result));
};

export { MfeButton as default };
