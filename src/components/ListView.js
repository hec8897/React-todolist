import React from "react";
import List from "./List";

// function UpdateTest(data) {
//   alert('업데이트 '+ data);
// }

const ListView = (props) => {

  const list = props.list.map((ele) => (
    <List
      key={ele.idx}
      idx={ele.idx}
      name={ele.Name}
      UpdateList={props.UpdateList}
      DeleteList={props.DeleteList}

    />
  ));

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default ListView;
