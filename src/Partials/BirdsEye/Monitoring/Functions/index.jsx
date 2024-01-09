import { Progress, Row } from "reactstrap";
import TableComponent from "../../../../Common/DataTable/TableComponent2";
import CustomProgressBar from "../../../../components/Common/CustomProgressBar";
import img from "../../../../assets/images/img.png";

function Index() {
  const columns = [
    {
      name: "PID",
      selector: (row) => <p style={{ color: "#Ed8b00" }}>{row.pid}</p>,
      sortable: true,
    },
    {
      name: "Cmd",
      selector: (row) => <p style={{ color: "#Ed8b00" }}>{row.cmd}t</p>,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      center: true,
    },
    {
      name: "User",
      selector: (row) => row.user,
      sortable: true,
      center: true,
    },

    {
      name: "CPU",
      selector: (row) => (
        <>
          {/* <div className="" style={{ width: "300px" }}>
            <p style={{ color: "#Ed8b00" }}>{row.description}</p>
            <p>{row.rev}</p>
          </div> */}
          <div className="mt-4 d-flex gap-3">
            <div className="mt-1">{row.cpu}</div>
            <div>
              {" "}
              <CustomProgressBar value={row.cpu} color="#00d084" bg="#080a0a" />
              <p style={{ color: "transparent" }}>vvvvvvvvvvvvv</p>
            </div>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Memory",
      selector: (row) => (
        <>
          {/* <div className="" style={{ width: "300px" }}>
            <p style={{ color: "#Ed8b00" }}>{row.description}</p>
            <p>{row.rev}</p>
          </div> */}
          <div className="mt-4 d-flex gap-3">
            <div className="mt-1">{row.memory}</div>
            <div>
              {" "}
              <CustomProgressBar
                value={row.memory}
                color="#00d084"
                bg="#080a0a"
              />
              <p style={{ color: "transparent" }}>vvvvvvvvvvvvv</p>
            </div>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Resident",
      selector: (row) => (
        <>
          {/* <div className="" style={{ width: "300px" }}>
            <p style={{ color: "#Ed8b00" }}>{row.description}</p>
            <p>{row.rev}</p>
          </div> */}
          <div className="mt-4 d-flex gap-3">
            <div className="mt-1">{row.resident}</div>
            <div>
              {" "}
              <CustomProgressBar
                value={row.resident}
                color="#00d084"
                bg="#080a0a"
              />
              <p style={{ color: "transparent" }}>vvvvvvvvvvvvv</p>
            </div>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Shared",
      selector: (row) => (
        <>
          {/* <div className="" style={{ width: "300px" }}>
            <p style={{ color: "#Ed8b00" }}>{row.description}</p>
            <p>{row.rev}</p>
          </div> */}
          <div className="mt-4 d-flex gap-3">
            <div className="mt-1">{row.shared}</div>
            <div>
              {" "}
              <CustomProgressBar
                value={row.shared}
                color="#00d084"
                bg="#080a0a"
              />
              <p style={{ color: "transparent" }}>vvvvvvvvvvvvv</p>
            </div>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
  ];

  const data = [
    {
      id: 1,
      pid: "6215",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 83.01,
      memory: 0.23,
      resident: 11.22,
      shared: 11.77,
    },
    {
      id: 2,
      pid: "2215",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 55.01,
      memory: 16.23,
      resident: 11.22,
      shared: 14.77,
    },
    {
      id: 3,
      pid: "2615",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 25.01,
      memory: 20.23,
      resident: 50.22,
      shared: 74.77,
    },
    {
      id: 4,
      pid: "6215",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 75.01,
      memory: 30.23,
      resident: 41.22,
      shared: 32.47,
    },
    {
      id: 5,
      pid: "6215",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 83.01,
      memory: 0.23,
      resident: 11.22,
      shared: 11.77,
    },
    {
      id: 6,
      pid: "6215",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 75.01,
      memory: 30.23,
      resident: 41.22,
      shared: 32.47,
    },
    {
      id: 7,
      pid: "6215",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 75.01,
      memory: 30.23,
      resident: 41.22,
      shared: 32.47,
    },
    {
      id: 8,
      pid: "6215",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 83.01,
      memory: 0.23,
      resident: 11.22,
      shared: 11.77,
    },
    {
      id: 9,
      pid: "6215",
      cmd: "key",
      category: "httpd",
      user: "root",
      cpu: 75.01,
      memory: 30.23,
      resident: 41.22,
      shared: 32.47,
    },
  ];

  return (
    <>
      <div
        style={{ height: "100vh", width: "100%", backgroundColor: "white" }}
        className="p-5"
      >
        
        {" "}
        {/* <div className="mb-5">
          <h4 style={{ color: "gray" }}>
            Processes on ip-10-20-141-33.ec2.internal
          </h4>
          <p style={{ color: "black", width: '80%' }}>
            Birdseye Functions enable detaild low-level monitoring at the edg.
            Use this tab to execute functions on your node to see the results
            immediately.
            <span style={{color: "#Ed8b00" }}>
              Read the Birdseye functions documentation to learn more.
            </span>
          </p>
        </div> */}
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
                <h2 className="fw-bold mb-xl-2">
                  {" "}
                  Processes on ip-10-20-141-33.ec2.internal
                </h2>
                <p
                  className="fw-lighter text-light w-100 mt-4"
                  style={{ fontSize: "1em" }}
                >
                  Birdseye Functions enable detaild low-level monitoring at the
                  edg. Use this tab to execute functions on your node to see the
                  results immediately.
                  <span style={{ color: "black" }}>
                    {"    "} Read the Birdseye functions documentation to learn
                    more.
                  </span>
                </p>
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
        <Row className="mt-5">
          <TableComponent data={data} columns={columns} />
        </Row>
      </div>
    </>
  );
}

export default Index;
