import React, { Component } from "react";
import { Input, Button, List, Icon } from "antd";
import store from "./store";
// import axios from "axios";
import {getInputChangeAction,getBtnClickAction,getDelClickAction,getInitList} from "./store/actionCreators";//getTodoList,initListAction
import "antd/dist/antd.css";
import "./assets/css/index.css";

class Todo extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div>
        <div>
          <Input value={this.state.inputValue} onChange={this.handleInputChange} placeholder="Basic usage" style={{width:"300px",marginRight:"10px"}} />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{width:"300px",marginTop:"10px"}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => <List.Item><span>{item}</span> <Icon onClick={this.handleDelClick.bind(this,index)} type="close" style={{float:"right",paddingTop:"3px"}} /></List.Item>}
        />
      </div>
    )
  }

  handleStoreChange(){
    console.log("store change");
    this.setState(store.getState());
  }

  handleInputChange(e){
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick(e){
    const action = getBtnClickAction(e.target.value);
    store.dispatch(action);
  }

  handleDelClick(index){
    const action = getDelClickAction(index);
    store.dispatch(action);
  }

  componentDidMount(){
    const action = getInitList();
    store.dispatch(action);
    // axios.get("/api/todolist").then((res)=>{
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // }).catch(()=>{
    //   console.log("error");
    //   const data = ["新数据1","凌凌漆","大侠"];
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // })
    // getTodoList();
  }

}

export default Todo;