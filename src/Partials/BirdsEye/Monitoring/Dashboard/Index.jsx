import { useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { CardData } from "./Components/DashboardData";

import GaugeChart from "react-gauge-chart";

import CountingAnimation from "../../../../Common/CommonCounting/CountingAnimation";

import CardAction from "../../../Widgets/CardAction/CardAction";
import img from "../../../../assets/images/img.png";
import Hexagon from "../../../../Common/Hexagon";
import DataTable from "../../../../Common/DataTable/DataTable";
import { Button } from "reactstrap";
import CustomProgressBar from "../../../../components/Common/CustomProgressBar";

const Index = () => {
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);

  const [chartKey, setChartKey] = useState(0); // Add a key to force chart refresh

  useEffect(() => {
    // Update the key whenever rightbarHidden changes to force chart refresh
    setChartKey((prevKey) => prevKey + 1);
  }, [screenWidth]);

  const columns = [
    {
      Header: "Host",
      accessor: "name", // Replace with the actual accessor for your data
      Cell: ({ value }) => <span style={{ color: "black" }}>{value}</span>,
    },
    {
      Header: "State",
      accessor: "namse",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <Button
            style={{
              backgroundColor: "#00d084",
              color: "black",
              border: "none",
              borderRadius: "3px",
            }}
            className="px-3"
          >
            UP
          </Button>
        </span>
      ),
    },
    {
      Header: "CPU utilization",
      accessor: "",
      Cell: ({ value }) => (
        <div
          style={{ backgroundColor: "white", color: "black" }}
          className="d-flex hstack-justify-content-center"
        >
          {" "}
          <Button
            style={{
              backgroundColor: "#e0e0e0",
              color: "black",
              border: "none",
              borderRadius: "3px",
            }}
            className="text-center"
          >
            0.00004%
          </Button>
        </div>
      ),
    },
    {
      Header: "Memory",
      accessor: "2",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <CustomProgressBar value="20" bg="black" color="#00d084" />
        </span>
      ),
    },
    {
      Header: "Filesystem",
      accessor: "3",
      Cell: ({ value }) => (
        <span style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          <Button
            style={{
              backgroundColor: "#e0e0e0",
              color: "black",
              border: "none",
              borderRadius: "3px",
            }}
          >
            0.00002%
          </Button>
        </span>
      ),
    },

    // Add more columns as needed
  ];

  // Sample data
  const data = [
    { name: "pd_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 30 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "promethus-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },
    { name: "d_argocd_argo-cd-agrocd-server-66556ffd99-58cfd", age: 25 },

    // Add more data as needed
  ];

  return (
    <div className="px-4 py-3 page-body">
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
              <h2 className="fw-bold mb-xl-2">Host Uptime</h2>
              <p
                className="fw-lighter text-light w-100"
                style={{ fontSize: "0.8em" }}
              >
                Agent policies are used to manage settings across a group of
                agents. You can add integrations to your agent policy to specify
                what your agents collect. When you edit an agent policy, you can
                use Fleet to deploy updates to a specified group of agents.
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

      <div className="row g-3">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card p-3 px-4" style={{height: '205px'}}>
            <div>Host Statistics</div>
            <div className="py-4 m-0 text-center h2">
              <table>
                <tr>
                  <td>
                    <Hexagon size={"100"} fill="white" stroke="#e0e0e0" />
                  </td>
                  <td>
                    <table style={{ fontSize: "0.8rem" }}>
                      <tr>
                        <td className="fw-bolder" style={{ color: "#00d084" }}>
                          121
                        </td>
                        <td className="text-start">Up</td>
                      </tr>

                      <tr>
                        <td className="fw-bolder" style={{ color: "blue" }}>
                          0
                        </td>
                        <td className="text-start">In downtime</td>
                      </tr>
                      <tr>
                        <td className="fw-bolder" style={{ color: "orange" }}>
                          0
                        </td>
                        <td className="text-start">Unreachable</td>
                      </tr>
                      <tr>
                        <td style={{ color: "red" }}>121</td>
                        <td className="text-start">Total</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
            <div className="d-flex">
              <small className="text-muted">{data.year}</small>
              <div className="ms-auto">{data.per}</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card p-3 px-4">
            <div>Server Statistics</div>
            <div className="py-4 m-0 text-center h2">
              <table>
                <tr>
                  <td>
                    <Hexagon size={"100"} fill="white" stroke="#e0e0e0" />
                  </td>
                  <td>
                    <table style={{ fontSize: "0.8rem" }}>
                      <tr>
                        <td className="fw-bolder" style={{ color: "#00d084" }}>
                          121
                        </td>
                        <td className="text-start">OK</td>
                      </tr>

                      <tr>
                        <td className="fw-bolder" style={{ color: "blue" }}>
                          0
                        </td>
                        <td className="text-start">In downtime</td>
                      </tr>
                      <tr>
                        <td className="fw-bolder" style={{ color: "#7f35fd" }}>
                          10
                        </td>
                        <td className="text-start">On down host</td>
                      </tr>
                      <tr>
                        <td className="fw-bolder" style={{ color: "gold" }}>
                          20
                        </td>
                        <td className="text-start">Warning</td>
                      </tr>
                      <tr>
                        <td className="fw-bolder" style={{ color: "orange" }}>
                          30
                        </td>
                        <td className="text-start">Unkown</td>
                      </tr>
                      <tr>
                        <td style={{ color: "red" }}>121</td>
                        <td className="text-start">Total</td>
                      </tr>
                      <tr>
                        <td style={{ color: "black" }}>121</td>
                        <td className="text-start">Critical</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
            <div className="d-flex">
              <small className="text-muted">{data.year}</small>
              <div className="ms-auto">{data.per}</div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card p-3 px-4" style={{height: '205px'}}>
          <div>Cluster CPU Resources</div>
            <GaugeChart
              id="gauge-chart6"
              animate={false}
              nrOfLevels={15}
              percent={0.56}
              needleColor="#345243"
              textColor="orange"
              hideText='true'
            />
            <div className="d-flex">
              <small className="text-muted">{data.year}</small>
              <div className="ms-auto">{data.per}</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card p-3 px-4" style={{height: '205px'}}>
          <div>Cluster Memory Resources</div>
            <GaugeChart
              id="gauge-chart6"
              animate={false}
              nrOfLevels={15}
              percent={0.56}
              needleColor="#345243"
              textColor="orange"
              hideText='true'
            />
            <div className="d-flex">
              <small className="text-muted">{data.year}</small>
              <div className="ms-auto">{data.per}</div>
            </div>
          </div>
        </div>
       
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Kubernetes Pods</h6>
              <div className="dropdown card-action">
                <CardAction />
              </div>
            </div>
            <div>
              <div
                className="card-body custom_scroll "
                style={{ height: "690px" }}
              >
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />

                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />

                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                </div>
                <div className="d-flex justify-content-center">
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon />
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />{" "}
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                  <Hexagon stroke={"white"} fill={"orange"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Customer rating</h6>
              <div className="dropdown card-action">
                <CardAction />
              </div>
            </div>
            <div
              className="card-body custom_scroll"
              style={{ height: "280px" }}
            >
              <div className="d-flex align-items-center">
                <div className="avatar rounded-circle no-thumbnail theme-color4 text-white">
                  <i className="fa fa-star fa-lg"></i>
                </div>
                <h6 className="ms-3 mb-0">4.9 Rating </h6>
              </div>
              <div className="avatar-list avatar-list-stacked my-4 px-3">
                <img
                  className="avatar rounded-circle me-1"
                  src={avatar5}
                  data-toggle="tooltip"
                  title="Avatar"
                  alt="avatar"
                />
                <img
                  className="avatar rounded-circle me-1"
                  src={avatar6}
                  data-toggle="tooltip"
                  title="Avatar"
                  alt="avatar"
                />
                <img
                  className="avatar rounded-circle me-1"
                  src={avatar1}
                  data-toggle="tooltip"
                  title="Avatar"
                  alt="avatar"
                />
                <img
                  className="avatar rounded-circle me-1"
                  src={avatar4}
                  data-toggle="tooltip"
                  title="Avatar"
                  alt="avatar"
                />
                <span>+195K raters</span>
              </div>
              <p className="text-muted small mb-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="card-footer py-2">
              <a href="#" title="Rate Out Application">
                Rate Out Application
                <i className="fa fa-long-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div> */}
        <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-8">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Pod Overview</h6>
              <div className="dropdown card-action">
                <CardAction />
              </div>
            </div>
            <div className="card-body py-1">
              <div>
                <DataTable
                  colHight={"0.2rem"}
                  columns={columns}
                  data={data}
                  useGlobalFilter={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
