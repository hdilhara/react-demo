import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import Lifecyclehooks from './components/LifecycleHooks/LifecycleHooks';
import ReactHooks from './components/ReactHooks/ReactHooks';
import ControlledComonent from './components/ControlledComponent/ControlledComponent'

/** For Explain react controlled compoent */
// ReactDOM.render(
//   <ControlledComonent />,
//   document.getElementById('root')
// );

/** For Explain react hooks hooks */
// ReactDOM.render(
//   <ReactHooks />,
//   document.getElementById('root')
// );

/** For Explain life cycle hooks */
ReactDOM.render(
  <Lifecyclehooks />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
