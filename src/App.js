import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Box from "./components/Box";

function App() {
  const [xAxis, setxAxis] = useState(0);
  const [yAxis, setyAxis] = useState(0);

  return (
    <div className="main_container">
      <Button
        tag="UP"
        callBack={() => setyAxis(yAxis - 50)}
        className="horizontal"
        Axis={yAxis}
        AxisValue={0}
      />
      <div className="container">
        <Button
          tag="LEFT"
          callBack={() => setxAxis(xAxis - 50)}
          className="vertical"
          Axis={xAxis}
          AxisValue={0}
        />

        <Box xAxis={xAxis} yAxis={yAxis} />

        <Button
          tag="RIGHT"
          callBack={() => setxAxis(xAxis + 50)}
          className="vertical"
          Axis={xAxis}
          AxisValue={450}
        />
      </div>

      <Button
        tag="BOTTOM"
        callBack={() => setyAxis(yAxis + 50)}
        className="horizontal"
        Axis={yAxis}
        AxisValue={450}
      />
    </div>
  );
}

export default App;
