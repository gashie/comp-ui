import { Row , Button} from "reactstrap";
import Row1 from "./Row1";
import Row3 from "./Row3";
import Row2 from "./Row2";
import "./css/tab.css";
import { Link } from "react-router-dom";
import img from '../../../../assets/images/img.png'

function Index() {
  // Define data for each chart
  const chartData = [
    { data: "40", color: "#fe3912" },
    { data: "69", color: "#fe3912" },
    { data: "20", color: "#fe3912" },
    { data: "40", color: "#fe3912" },
    { data: "60", color: "#fe3912" },
    { data: "67", color: "#fe3912" },
    //{ data: "60", color: "#Ed8b00" },
    // Add more data objects for additional charts
  ];

  return (
    <>
      {/* <div className="d-flex m-2 mt-4 gap-2 mx-2" style={{ flexWrap: "wrap" }}>
        {chartData.map((dataObj, index) => (
          <ChartComponent
            key={index}
            data={dataObj.data}
            color={dataObj.color}
          />
        ))}
      </div>
      <div className="d-flex m-2 mt-4 gap-2 mx-2" style={{ flexWrap: "wrap" }}>
        {chartData.map((dataObj, index) => (
          <ChartComponent
            key={index}
            data={dataObj.data}
            color={dataObj.color}
          />
        ))}
      </div> */}
      <div
        className=" p-4"
        style={{
          backgroundColor: "white",
          overflowX: "hidden",
          height: "auto",
        }}
      >
           <div
        className="card mb-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
          color: "white",
        }}
      >
        <div className="card-body">
          <div className="row g-4 li_animate">
            <div className="col-xl-8 col-lg-8">
              <h2 className="fw-bold mb-xl-2">Monitoring Panel Home</h2>
              <p
                className="fw-lighter text-light w-100"
                style={{ fontSize: "0.8em" }}
              >
                Agent policies are used to manage settings across a group of
                agents. You can add integrations to your agent policy to specify
                what your agents collect. When you edit an agent policy, you can
                use Fleet to deploy updates to a specified group of agents.
              </p>
              <Link to='/app/configure-applications'>
              {/* <Button style={{backgroundColor: 'white', color: 'orange', border: 'none'}} className="btn btn-light">
                <i className="bi-plus"></i> Add Application
              </Button> */}
              </Link>
              
            </div>
            <div className="col-xl-4 col-lg-4 d-flex justify-content-end">
              <img
                src={img}
                alt="Your Image"
                className="img-fluid"
                width="300"
              />
            </div>
          </div>
        </div>
      </div>
        <Row>
          <Row1 />
        </Row>
        <Row>
          <Row2 />
        </Row>
        <Row>
          <Row3 />
        </Row>
      </div>
    </>
  );
}

export default Index;
