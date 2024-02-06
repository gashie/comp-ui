import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "./Chevrons";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import AdvancedOptionsContent from "./AdvancedOptionsContent";

function AdvancedOptions() {
  const items = [
    { title: "Advanced Options", content: "This is the content of item 1." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordion">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`accordion-item p-3 ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
              style={{ borderRadius: "10px" }}
            >
              <div className="accordion-header d-flex justify-content-between align-items-center">
                <h6 className="text-muted">{item.title}</h6>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
          
            </div>
            {activeIndex === index && <div style={{border: '1px solid #e0e0e0', borderRadius: '10px'}} className="mt-2 p-2" ><AdvancedOptionsContent /></div>}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default AdvancedOptions;
