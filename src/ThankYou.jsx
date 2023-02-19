import React from "react";
import CheckIcon from "./assets/images/icon-complete.svg";
function ThankYou() {
  return (
    <div className="grow flex flex-col mt-[19rem] md:m-auto  justify-center items-center">
      <img src={CheckIcon} alt="icon" />
      <h4 className="my-5 text-xl tracking-widest text-[hsl(278,68%,11%)]">
        THANK YOU!
      </h4>
      <small className="text-gray-500">We've added your card details</small>
      <button className="bg-[hsl(278,68%,11%)]  py-2 my-6 font-bold rounded-md text-white w-1/2">
        Continue
      </button>
    </div>
  );
}

export default ThankYou;
