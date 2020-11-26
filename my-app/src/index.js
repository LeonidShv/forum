import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

// SE.init({
//   clientId: 1,
//   key: '123456',
//   channelUrl: 'http://example.com/blank',
//   complete: function (data) { console.log(111); }
// });

// SE.authenticate({
//   success: function(data) { console.log(222); },
//   error: function(data) { console.log(333); },
//   scope: ['read_inbox'],
//   networkUsers: true
// });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
