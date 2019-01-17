import React from "react";
import Pad from "./pad";

const controlPad = [
  "AC",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "/",
  "+",
  "-",
  "=",
  "."
];

const Padz = () => {
  return (
    <div className="pads-control">
      {controlPad.map(e => {
        console.log(e);
        return <Pad key={e} pad={e} id={e} />;
      })}
    </div>
  );
};

export default Padz;
