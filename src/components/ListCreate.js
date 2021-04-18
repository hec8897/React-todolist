import React from "react";

const ListCreater = (props) => {
  return (
    <div>
      <input></input>
      <button onClick={()=>props.CreateList(1)}>작성</button>
    </div>
  );
};

export default ListCreater;
