import React from "react";
import List from "./List";

// function UpdateTest(data) {
//   alert('업데이트 '+ data);
// }

const ListView = (props) => {
  console.log(props);

  const list = props.list.map((ele) => (
    <List
      key={ele.idx}
      name={ele.Name}
      Desc={ele.Desc}
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
