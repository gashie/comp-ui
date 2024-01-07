const CustomProgressBar = ({ value, color, bg, curved, width, height }) => {
  const progressStyle = {
    height: height ?? '20px',
    width: width ?? "auto",
    borderRadius: curved && "10px",
    overflow: "hidden",
    backgroundColor: bg
  };

  const progressBarStyle = {
    width: `${value}%`,
  
    height: "100%",
    backgroundColor: color || "#Ed8b00", // Default color is #Ed8b00
  };

  return (
    <>
     <div style={progressStyle}>
      <div style={progressBarStyle}></div>
    </div></>
   
  );
};

export default CustomProgressBar;
