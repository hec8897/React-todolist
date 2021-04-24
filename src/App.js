import React, { Component } from "react";
import ListView from "./components/ListView";
import ListCreater from "./components/ListCreate";

const Wrap = {
  padding: "20px",
};

class App extends Component {
  idx = 2;
  constructor(props) {
    super(props);
    this.state = {
      basicSetting: { title: "리엑트 튜토리얼" },
      Inputs:"",
      todoList: [
        { idx: 0, Name: "리스트", Desc: "lorem ipsum is simple dummy" },
        { idx: 1, Name: "리스트", Desc: "lorem ipsum is simple dummy" },
      ],
    }
  };

  CreateList = () => {
    const {todoList,Inputs} = this.state;

    this.setState({
      Inputs:"",
      todoList: todoList.concat({
        idx : this.idx++,
        Name : Inputs
      })
    })
  }
  onChange = (e) => {
    this.setState({
      Inputs:e.target.value
    })
  }

  UpdateList(data) {
    alert("업데이트 " + data);
  }

  DeleteList = (idx) => {
    const {todoList} = this.state
    this.setState({
      todoList:todoList.filter((ele)=>{
        return ele.idx!==idx
      })
    })
  }

  render() {
    const { title } = this.state.basicSetting;
    const {DeleteList, CreateList, onChange} = this 
    return (
      <div className="App" style={Wrap}>
        <h1>{title}</h1>
        <ListCreater CreateList={CreateList} onChange={onChange} value={this.state.Inputs} />
        <ListView
          name={title}
          list={this.state.todoList}
          UpdateList={this.UpdateList}
          DeleteList={DeleteList}
        />
      </div>
    );
  }
}

export default App;
