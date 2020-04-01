import {CHANGE_INPUT_VALUE,ADD_BTN_VALUE,DELETE_LIST_ITEM,INIT_LIST_ACTION,GET_INIT_LIST} from "./actionTypes";
// import axios from "axios";

export const getInputChangeAction = (value)=>({
  type:CHANGE_INPUT_VALUE,
  value
});

export const getBtnClickAction = (value)=>({
  type:ADD_BTN_VALUE,
  value
});

export const getDelClickAction = (index)=>({
  type:DELETE_LIST_ITEM,
  index
});

export const initListAction = (data)=>({
  type:INIT_LIST_ACTION,
  data
});

export const getInitList = (data)=>({
  type:GET_INIT_LIST,
});

// export const getTodoList = ()=>{
//   return (dispatch)=>{
//     axios.get("/api/todolist").then((res)=>{
//       const data = res.data;
//       const action = initListAction(data);
//       dispatch(action);
//     }).catch(()=>{
//       console.log("error");
//       const data = ["新数据1","凌凌漆","大侠"];
//       const action = initListAction(data);
//       store.dispatch(action);
//     })
//   }
// };