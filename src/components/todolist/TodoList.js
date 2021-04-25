import React, { Component } from "react";
import ListView from "./ListView";
import ListCreater from "./ListCreate";
class TodoList extends Component {
  idx = 2;
  constructor(props) {
    super(props);
    this.state = {
      Mode: "normal",
      basicSetting: { title: "리엑트 튜토리얼" },
      Inputs: "",
      todoList: [
        { idx: 0, Name: "리스트", Desc: "lorem ipsum is simple dummy123" },
        { idx: 1, Name: "리스트", Desc: "lorem ipsum is simple dummy234" },
      ],
    };
  }

  CreateList = () => {
    const { todoList, Inputs } = this.state;

    this.setState({
      Inputs: "",
      todoList: todoList.concat({
        idx: this.idx++,
        Name: Inputs,
      }),
    });
  };
  onChange = (e) => {
    this.setState({
      Inputs: e.target.value,
    });
  };

  UpdateList(data) {
    alert("업데이트 " + data);
  }

  DeleteList = (idx) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((ele) => {
        return ele.idx !== idx;
      }),
    });
  };
  render() {

    const { DeleteList, CreateList, onChange } = this;

    return (
      <div>
        <ListCreater
          CreateList={CreateList}
          onChange={onChange}
          value={this.state.Inputs}
        />
        <ListView
          list={this.state.todoList}
          UpdateList={this.UpdateList}
          DeleteList={DeleteList}
        />
      </div>
    );
  }
}

export default TodoList;
