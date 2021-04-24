import React from "react";

const btnStyle = {
  color: "white",
  background: "teal",
  padding: "5px 10px",
  border: "1px solid teal",
  borderRadius: ".25rem",
  fontSize: "14px",
  margin: "5px",
  cursor: "pointer",
};

const List = (props) => {
  const { idx, name, UpdateList, DeleteList } = props;
  return (
    <li>
      <h2>{idx}.{name}</h2>
      <div>
        <button style={btnStyle} onClick={() => UpdateList(name)}>
          수정
        </button>
        <button
          style={btnStyle}
          onClick={(e) => {
            e.preventDefault();
            DeleteList(idx);
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default List;
