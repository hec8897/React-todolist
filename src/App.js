import React, { Component } from "react";
import TodoList from "./components/todolist/TodoList";
import DescView from "./components/todolist/DescView";
import Home from "./components/home/Home";
import { Route, Link } from "react-router-dom";

const Wrap = {
  padding: "20px",
};

class App extends Component {
  render() {
    return (
      <div className="App" style={Wrap}>
        <h1>리엑트 튜토리얼</h1>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/todo">투두 리스트</Link>
          </li>
        </ul>
        <Route path="/" component={Home} exact />
        <Route path={"/todo"} component={TodoList} />
        <Route path={"/todoinfo/:idx"} component={DescView} />
      </div>
    );
  }
}

export default App;
