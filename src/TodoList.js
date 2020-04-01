import React , {Component, Fragment} from 'react';
import axios from 'axios';
import { CSSTransition , TransitionGroup } from "react-transition-group";
import TodoItem from './TodoItem.js';
import "./assets/css/index.css";

class TodoList extends Component {

  constructor(props){
    super(props);
    // 当组件的state或者props数据发生改变时,render函数会重新执行
    this.state = {
      inputValue :"hello...",
      list:[],
      show:true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // 在组件即将被挂载到页面的时候自动执行
  componentWillMount(){
    console.log("componentWillMount");
  }

  render() {
    console.log("parent render");
    return (
      <Fragment>
        <section>
          <h3>1.表單</h3>
          <div>
            <label htmlFor="insertArea">输入内容：</label>
            <input id="insertArea" value={this.state.inputValue} onChange={this.handleInputChange}/>
            <button onClick={this.handleBtnClick}>提交</button>
          </div>
          {/* 通过ref操作dom结点 */}
          <ul ref={(ul) => {this.ul = ul}}>
            {this.getTodoItem()}
          </ul>
        </section>

        {/* CSSTransition */}
        <section>
          <h3>2.CSSTransition</h3>
          <CSSTransition
            in={this.state.show}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            onEntered={(el)=>{el.style.color="blue"}}
            appear={true}
          >
            <p>CSSTransition</p>
          </CSSTransition>
          <p className={this.state.show ? 'show' : 'hide'}>hello everyone</p>
          <button onClick={this.handleToggle}>toggle</button>
        </section> 

        {/* TransitionGroup */}
        <h3>3.TransitionGroup</h3>
        <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
              return (
                <CSSTransition
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                  onEntered={(el)=>{el.style.color="blue"}}
                  appear={true}
                  key={index}
                >
                  <p>{item}</p>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>

      </Fragment>
    )
  }

  // 组件被更新之前，它会被自动执行
  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate");
    return true; //默认更新
    // if(nextProps.inputValue !== this.props.inputValue){
    //   return true; //默认更新
    // }else{
    //   return false;
    // }
  }

  // 组件被更新之前，它会被自动执行，但是在shouldComponentUpdate返回true之后执行
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }

  // 组件更新完成之后，它会被执行
  componentDidUpdate(){
    console.log("----componentDidUpdate----");
  }

  // 在组件被挂载到页面之后自动执行
  componentDidMount(){
    console.log("----componentDidMount----");
    axios.get("/api/todolist").then((res)=>{
      console.log(res);
    }).catch(()=>{
      console.log("error");
    })
  }  


  getTodoItem(){
    return this.state.list.map((item,index)=>{
      return (
        <div key={index}>
          {/* 子组件 */}
          <TodoItem 
            content={item}
            index={index}
            deleteItem={this.handleDelClick}
          /> 
          
          {/* <li>
            <span dangerouslySetInnerHTML={{__html: item}}></span>  {item}  {//编译DOM}
            <span className="del-icon" onClick={this.handleDelClick(index)}>×</span> {//删除功能}
          </li> */}
        </div>
      )
    })
  }

  handleInputChange(e){
    let value = e.target.value;
    this.setState(()=>({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }

  handleBtnClick(){
    this.setState((prevState)=>({
      list: [...prevState.list,prevState.inputValue],
      inputValue: ""
    }),()=>{ //回调函数
      console.log(this.ul.querySelectorAll("div").length);
    });
  }

  handleDelClick(index){
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      return {list};
    });
  }

  handleToggle(){
    this.setState(()=>({
      show: this.state.show ? false : true
    }));
  }

}

export default TodoList;
