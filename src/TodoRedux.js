import React from "react";//, { Component }
// import store from "./store";
import { connect } from "react-redux";
import {getInputChangeAction,getBtnClickAction} from "./store/actionCreators";

//无状态组件(当组件中只含有render函数时)
const TodoRedux = (props)=>{
  const { inputValue, changeInputValue, handleClick, list } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

// class TodoRedux extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
//           <button onClick={this.props.handleClick}>提交</button>
//         </div>
//         <ul>
//           {
//             this.props.list.map((item,index)=>{
//               return <li key={index}>{item}</li>
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
//   handleInputChange(e){
//     console.log(e.target.value);
//   }
// }

const mapStateToProps = (state) =>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProp = (dispatch) =>{
  return {
    changeInputValue(e){
      // const action = {
      //   type: "change_input_value",
      //   value: e.target.value
      // }
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleClick(e){
      const action = getBtnClickAction(e.target.value);
      dispatch(action);
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProp)(TodoRedux);
