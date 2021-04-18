import React from "react";

const btnStyle = {
  color: "white",
  background: "teal",
  padding: "5px 10px",
  border: "1px solid teal",
  borderRadius: ".25rem",
  fontSize: "14px",
  margin:'5px'
};

const List = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.Desc}</p>
      <div>
        <button style={btnStyle}>수정</button>
        <button style={btnStyle}>삭제</button>
      </div>
    </li>
  );
};

export default List;
