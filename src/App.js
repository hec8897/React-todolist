import React, { Component } from "react";
import ListView from "./components/ListView";

class App extends Component {
  constructor(props) {
    super(props);
      this.state={
      basicSetting:{title:"리엑트 튜토리얼"},
      todoList:[
        {idx:0,Name:"리스트1",Desc:"lorem ipsum is simple dummy"},
        {idx:1,Name:"리스트2",Desc:"lorem ipsum is simple dummy"}
      ]
    }
  }


  render() {
    const {title} = this.state.basicSetting
    return (
      <div className="App">
        <ListView name={title} list={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
