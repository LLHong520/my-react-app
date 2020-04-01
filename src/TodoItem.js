import React , {Component} from 'react';
import PropTypes from "prop-types";
import "./assets/css/index.css";

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // 当父组件的render函数运行时子组件的render函数也会重新运行一次
  render(){
    console.log("child render");
    // 简化this.props.content
    const { content } = this.props;
    return (
      <li>
        {this.props.test + '----'}
        <span dangerouslySetInnerHTML={{__html: content}}></span> {/* 编译DOM */}
        <span className="del-icon" onClick={this.handleClick}>×</span> {/* 删除功能 */}
      </li>
    );
  }

  handleClick(){
    const {deleteItem , index} = this.props;
    deleteItem(index);
    // this.props.deleteItem(this.props.index); //简化
  }

  /* 一个组件从父组件接受参数，
     只要父组件的render函数被重新执行，
     子组件这个生命周期函数就会被执行
  */
  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  // 当组件即将从页面中剔除的时候，会被执行
  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  deleteItem:PropTypes.func,
  index:PropTypes.number 
}

TodoItem.defaultProps = {
  test : "内容"
}

export default TodoItem;
