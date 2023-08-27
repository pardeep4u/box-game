import React from "react";

function Button(props) {
  const { tag, callBack, className, Axis, AxisValue } = props;

  return (
    <button
      className={className}
      onClick={callBack}
      disabled={Axis === AxisValue}
    >
      {tag}
    </button>
  );
}

export default Button;
