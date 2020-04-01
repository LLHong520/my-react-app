/* reducer存储数据，可以接收state数据但不能改变state数据 */
// import {CHANGE_INPUT_VALUE,ADD_BTN_VALUE,DELETE_LIST_ITEM,INIT_LIST_ACTION} from "./actionTypes";
import * as actionTypes from "./actionTypes"
// import { fromJS } from "immutable";

// const defaultState = fromJS({
//   inputValue: "123",
//   list: []//"1","2","3"
// });
const defaultState = {
  inputValue: "123",
  list: []//"1","2","3"
}

export default (state = defaultState, action) => {
  // console.log(action);
  if(action.type === actionTypes.CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // return state.set("inputValue", action.value);
    return newState;
  }else if(action.type === actionTypes.ADD_BTN_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }else if(action.type === actionTypes.DELETE_LIST_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }else if(action.type === actionTypes.INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}