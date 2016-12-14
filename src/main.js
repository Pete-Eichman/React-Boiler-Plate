import React from 'react';
import ReactDOM from 'react-dom';

let headerElement = React.createElement(
  'h1',
  null,
  "This is the ReactDOM text."
);

ReactDOM.render(
  headerElement,
  document.getElementById('app')
);
