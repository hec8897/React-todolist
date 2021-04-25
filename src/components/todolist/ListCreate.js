import React from "react";

const ListCreater = ({ value, onChange, CreateList }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChange(e);
        }}
      ></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          CreateList(value);
        }}
      >
        작성
      </button>
    </div>
  );
};

export default ListCreater;
