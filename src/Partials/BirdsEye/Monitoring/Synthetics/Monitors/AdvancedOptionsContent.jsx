import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import {
//   Button,
//   ButtonGroup,
//   ButtonToolbar,
//   Spinner,
//   UncontrolledAlert,
// } from "reactstrap";

function AdvancedOptionsContent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //   const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value);
  //   };

  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState([{ name: "", value: "" }]);
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [apmServiceName, setApmServiceName] = useState("");
  const [dataStreamNamespace, setDataStreamNamespace] = useState("default");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleHeaderChange = (index, name, value) => {
    const newHeaders = [...headers];
    newHeaders[index] = { name, value };
    setHeaders(newHeaders);
  };

  const handleAddHeader = () => {
    setHeaders([...headers, { name: "", value: "" }]);
  };

  const handleRemoveHeader = (index) => {
    const newHeaders = [...headers];
    newHeaders.splice(index, 1);
    setHeaders(newHeaders);
  };

  return (
    <>
      <VerticalTimeline
        layout="1-column-left"
        lineColor="transparent"
        animate="true"
        className="w-100"
      >
        <div>
        
        </div>
      </VerticalTimeline>
    </>
  );
}

export default AdvancedOptionsContent;
