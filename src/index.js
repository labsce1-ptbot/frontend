import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import ProfilePage from './components/ProfilePage'
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';

ReactDOM.render(<ProfilePage />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
