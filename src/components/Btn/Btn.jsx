import React from "react";
import cs from "./Btn.module.sass";

const Btn = ({ text, onClick, ...props }) => (
  <div className={cs.Btn} onClick={onClick} {...props}>
    <span>{text}</span>
  </div>
);

export default Btn;
