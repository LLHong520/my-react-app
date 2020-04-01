import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './style.js';
import {GlobalStyled} from './style.js';
// import App from './App';
// import TodoList from './TodoList';
// import Todo from './Todo';
import TodoRedux from './TodoRedux';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";

const App = (
  <Provider store={ store }>
    <GlobalStyled/>
    <TodoRedux />
  </Provider>
)
 
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(<Todo />, document.getElementById('root'));
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
