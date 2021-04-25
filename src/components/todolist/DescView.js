import React from "react";

const DescView = ({ match }) => {
    const {idx} = match.params 
  console.log(match.params);
  return <div>{idx}</div>;
};

export default DescView;
