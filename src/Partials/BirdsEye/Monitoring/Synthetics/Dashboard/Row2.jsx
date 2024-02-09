import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import ChartComponent from "../../../../../components/Charts/SpikeCircularProgressBar";
import { FaCircle } from "react-icons/fa";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import DataTable from "../../../../../Common/DataTable/DataTable";

import { MyAnalytics } from "./Charts/MyAnalyticsChart";
import { TableAnalytics } from "./Charts/TableAnalytics";
import AtomComponent from "./Charts/AtomComponent";

function Row2() {
  const [chartKey, setChartKey] = useState(0); // Add a key to force chart refresh
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  useEffect(() => {
    // Update the key whenever rightbarHidden changes to force chart refresh
    setChartKey((prevKey) => prevKey + 1);
  }, [screenWidth]);

  const columns = [
    {
      Header: "Status",
      accessor: "is_active",

      Cell: ({ value }) => (
        <div className="text-start">
          <div className="d-flex justify-content-center gap-2">
            <div>
              <FaCircle style={{ color: "#ec255a" }} />
            </div>
            <div>
              <div className="">Down</div>
              <div className="text-muted">2m ago</div>
            </div>
            <div>
              <div className="mx-5">in 3/3 Locations</div>
            </div>
          </div>
        </div>
      ),
    },

    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "URL",
      accessor: "url",
    },

    {
      Header: "Status",
      accessor: "no",

      Cell: ({ value }) => (
        <div className="text-start">
          <div className="d-flex justify-content-center gap-2">
            <Chart
              id="apex-MyAnalytics"
              className="apex-extra-none"
              key={chartKey}
              options={TableAnalytics}
              series={TableAnalytics.series}
              height={TableAnalytics.chart.height}
              type={TableAnalytics.chart.type}
            />
          </div>
        </div>
      ),
    },

    // {
    //   Header: "Manage Users",
    //   accessor: "5",
    //   Cell: ({ value }) => (
    //     <span style={{ backgroundColor: "white", color: "black" }}>
    //       {" "}
    //       <div className="form-check form-switch card-toggle-two">
    //         <input
    //           className="form-check-input toggles"
    //           type="checkbox"
    //           role="switch"
    //           id="card-toggle-two"
    //         />
    //       </div>
    //     </span>
    //   ),
    // },
    // Add more columns as needed
  ];

  // Sample data
  const data = [
    { name: "Always Down Local Port", url: "tcp://localhost: 18278" },
    { name: "Android Homepage", url: "tcp://localhost: 18278" },
    { name: "HTTP-Opbeans Frontend", url: "tcp://localhost: 18278" },
    { name: "HTTP-NoHere", url: "tcp://localhost: 18278" },
    { name: "HTTP-NoHere", url: "tcp://localhost: 18278" },
    { name: "Always Down Local Port", url: "tcp://localhost: 18278" },
    { name: "Always Down Local Port", url: "tcp://localhost: 18278" },
    { name: "Always Down Local Port", url: "tcp://localhost: 18278" },
    // Add more data as needed
  ];

  return (
    <>
      <div className="mt-5 ">
        <Card>
          <div className="d-flex justify-content-evenly mx-5 align-items-center">
            {/* pings */}

            <div>
              <div className="fs-4 fw-bolder p-3 mx-2">26 Monitors</div>
              <ChartComponent
                data={"10"}
                color={"#ffa500"}
                show={false}
                thickness={"thick"}
                scaleColor={"white"}
                lineCap={"flat"}
                trackColor={"#f2f2f7"}
                size={"250"}
              />
            </div>
            <div className="mx-4">
              <table>
                <tr>
                  <td>
                    <p className="fw-bolder">
                      <FaCircle className="mx-2" style={{ color: "#ffa500" }} />{" "}
                      Down
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="mx-5 fw-bolder">5</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="fw-bolder">
                      <FaCircle className="mx-2" style={{ color: "#f2f2f7" }} />{" "}
                      Up
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="mx-5 fw-bolder">21</p>
                  </td>
                </tr>
              </table>
            </div>
            <div className="w-50">
              <div className="fs-4 fw-bolder p-3 mx-2">Pings over time</div>
              <Chart
                id="apex-MyAnalytics"
                className="apex-extra-none"
                key={chartKey}
                options={MyAnalytics}
                series={MyAnalytics.series}
                height={MyAnalytics.chart.height}
                type={MyAnalytics.chart.type}
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-5 ">
        <Card>
          <div className="d-flex justify-content-evenly mx-5 align-items-center">
            {/* pings */}
            <AtomComponent />
          </div>
        </Card>
      </div>

      <div className="mt-5 mb-4 ">
        <Card className="">
          <div className="p-4">
            {/* pings */}
            <div>
              <div className="fs-4 fw-bolder mb-4 mt-4">Monitor Status</div>
              <DataTable columns={columns} data={data} useGlobalFilter={true} />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Row2;
