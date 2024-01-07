import React from "react";
import { Hexagon } from "react-feather";

function Index({fill, stroke, size}) {
  return (
    <div>
      <Hexagon style={{border: '', position: 'sticky'}} stroke={stroke || "orange"} fill={fill || "white"} size={size || '25'} strokeWidth='0.5'>
      
      </Hexagon>
    </div>
  );
}

export default Index;
