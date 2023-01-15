import React from "react";
import { useSelector } from "react-redux";

export default function Reader() {
   const counterState = useSelector((state) => state.counter);
   return (
      <div>
         <h2>Reader</h2>

         <h4>Leído: {counterState.value}</h4>
      </div>
   );
}