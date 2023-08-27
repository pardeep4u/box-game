import React from "react";

function Box(props) {
  const { xAxis, yAxis } = props;

  return (
    <div className="main">
      <div className="box" style={{ left: xAxis, top: yAxis }}></div>
    </div>
  );
}

export default Box;
