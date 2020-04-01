import { createStore, compose, applyMiddleware} from "redux";// ,applyMiddleware
import reducer from "./reducer";
// import thunk from "redux-thunk"; //actionCreators 可返回函數
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));//thunk
const store = createStore(
  reducer,
  enhancer
  // composeEnhancers()
);
sagaMiddleware.run(mySaga);

export default store;
