import React from "react";
import List from "./List";

import { Link } from "react-router-dom";

const ListView = (props,match) => {
  console.log(match)
  const list = props.list.map((ele) => (
    <div key={ele.idx}>
      <Link to={`/todoinfo/${ele.idx}`}>
        <List
          key={ele.idx}
          idx={ele.idx}
          name={ele.Name}
          UpdateList={props.UpdateList}
          DeleteList={props.DeleteList}
        />

      </Link>
    </div>
  ));

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default ListView;
