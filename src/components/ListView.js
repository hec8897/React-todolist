import React from "react";
import List from "./List";

function UpdateTest(data) {
  alert(data);
}

const ListView = (props) => {
  console.log(props);

  const list = props.list.map((ele) => (
    <List key={ele.idx} name={ele.Name} Desc={ele.Desc} />
  ));

  return (
    <div>
    <button onClick={()=>UpdateTest(1)}>test123</button>
      <h1 onClick={()=>alert(1)}>{props.name}</h1>
      <ul>{list}</ul>
    </div>
  );
};

export default ListView;
