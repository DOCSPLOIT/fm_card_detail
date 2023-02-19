import React from "react";

function Input(props) {
  return (
    <div className={"flex flex-col mt-5 " + props.className ?? ""}>
      {props.name && (
        <label className={"uppercase text-xs mb-3 tracking-wider"}>
          {props.name}
        </label>
      )}
      <input
        {...props.inputProps}
        className={
          props.inputProps.className +
          " border md:p-2 py-2  focus:border-[hsl(278,68%,11%)] outline-none bg-transparent rounded-md" +
          (props.error ? " border-red-500" : "")
        }
      />
      {props.error && <small className="text-red-500">{props.error}</small>}
    </div>
  );
}

export default Input;
