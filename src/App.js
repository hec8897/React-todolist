import React, { Component } from "react";
import ListView from "./components/ListView";
import ListCreater from "./components/ListCreate"

const Wrap = {
  padding:"20px"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicSetting: { title: "리엑트 튜토리얼" },
      todoList: [
        { idx: 0, Name: "리스트1", Desc: "lorem ipsum is simple dummy" },
        { idx: 1, Name: "리스트2", Desc: "lorem ipsum is simple dummy" },
      ],
    };
  }

  
  CreateList(data) {
    alert("새로 작성 " + data);
  }

  UpdateList(data) {
    alert("업데이트 " + data);
  }

  DeleteList(data) {
    alert("삭제 " + data);
  }

  render() {
    const { title } = this.state.basicSetting;
    return (
      <div className="App" style={Wrap}>
        <h1>{title}</h1>
        <ListCreater CreateList={this.CreateList}/>
        <ListView
          name={title}
          list={this.state.todoList}
          UpdateList={this.UpdateList}
          DeleteList={this.DeleteList}
        />
      </div>
    );
  }
}

export default App;
