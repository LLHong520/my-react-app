import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
// import store from "../store";

function* getInitList(){
  console.log("abc");
  try {
    const res = yield axios.get("/api/todolist");
    const action = initListAction(res.data);
    yield put(action);
  } catch (error) {
    console.log("/api/todolist地址请求失败");

    const data = ["新数据1","凌凌漆","大侠"];
    const action = initListAction(data);
    yield put(action);
  }
}

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;