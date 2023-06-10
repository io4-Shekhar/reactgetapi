import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Hooks.css";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("Use memo call");
  const [changeHeadingName, setChangeHeadingName] = useState("Increase");

  // useEffect structure --
  useEffect(() => {
    setCount(() => count);
    console.log("use effect console");
  }, [count]);

  const handleIncreaseCount = () => {
    setCount(() => count + 4);
    setChangeHeadingName("Increase");
  };

  const handleCountDecrease = () => {
    setCount(() => count - 1);
    setChangeHeadingName("Decrease");
  };

  // useMemo memoize the value , when value change then its call
  useMemo(() => {
    setCount(() => count);
    console.log("use memo");
  }, [count]);

  // useCallback memoize the function call
  const callBack = useCallback(() => {
    setCount(() => count + 2);
    console.log("use callback");
  }, [count]);

  return (
    <div className="counting">
      <div className="card countCard">
        <div className="card-body countingBox">
          <h5 className="card-title">Count {changeHeadingName} Box</h5>
          <div>this is hooks div {count}</div>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-info m-2"
              onClick={handleIncreaseCount}
            >
              Count increase By 4 number
            </button>
            <button
              onClick={handleCountDecrease}
              type="button"
              className="btn btn-primary m-2"
            >
              Count decrease By 1 number
            </button>
          </div>
        </div>
      </div>

      <h3> This is Use memo Value {val}</h3>
      <button onClick={callBack}> This is Use callback Value</button>
    </div>
  );
};

export default Hooks;
