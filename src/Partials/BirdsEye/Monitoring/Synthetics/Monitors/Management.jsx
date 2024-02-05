import React, { useState } from "react";
import { Card } from "reactstrap";
import { FiAlertTriangle } from "react-icons/fi";
import TableComponent from "../../../../../Common/DataTable/TableComponent2";
import { FaCircle } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import Switch from "../../../../../components/Common/SwitchToggle";
import { TbDots } from "react-icons/tb";

function Management() {
  const data = [
    {
      monitor: "TMS/MMS DatabaseSERVER",
      type: "ICMP",
      frequency: "1 minute",
      locations: "BIRDSEYE-HQ-MAIN",
      tags: "HQ-Server",
    },
    {
      monitor: "TMS/MMS DatabaseSERVER",
      type: "ICMP",
      frequency: "1 minute",
      locations: "BIRDSEYE-HQ-MAIN",
      tags: "HQ-Server",
    },
    {
      monitor: "TMS/MMS DatabaseSERVER",
      type: "ICMP",
      frequency: "1 minute",
      locations: "BIRDSEYE-HQ-MAIN",
      tags: "HQ-Server",
    },
    {
      monitor: "TMS/MMS DatabaseSERVER",
      type: "ICMP",
      frequency: "1 minute",
      locations: "BIRDSEYE-HQ-MAIN",
      tags: "HQ-Server",
    },
    {
      monitor: "TMS/MMS DatabaseSERVER",
      type: "ICMP",
      frequency: "1 minute",
      locations: "BIRDSEYE-HQ-MAIN",
      tags: "HQ-Server",
    },
    {
      monitor: "TMS/MMS DatabaseSERVER",
      type: "ICMP",
      frequency: "1 minute",
      locations: "BIRDSEYE-HQ-MAIN",
      tags: "HQ-Server",
    },
    {
      monitor: "TMS/MMS DatabaseSERVER",
      type: "ICMP",
      frequency: "1 minute",
      locations: "BIRDSEYE-HQ-MAIN",
      tags: "HQ-Server",
    },
    {
      monitor: "TMS/MMS DatabaseSERVER",
      type: "ICMP",
      frequency: "1 minute",
      locations: "BIRDSEYE-HQ-MAIN",
      tags: "HQ-Server",
    },
  ];
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  };

  const columns = [
    {
      name: "Monitor",
      button: true,
      center: true,
      selector: (row) => <p style={{ color: "" }}>{row.monitor}</p>,
    },

    {
      name: "Type",
      selector: (row) => (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="px-4 py-1 text-dark mx-2"
              style={{ backgroundColor: "#dbdbdb", borderRadius: "4px" }}
            >
              <CiWifiOn /> {row?.type}
            </div>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Frequency",

      button: true,
      center: true,
      selector: (row) => <p style={{ color: "" }}>{row.frequency}</p>,
    },

    {
      name: "Locations",
      selector: (row) => (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="px-4 py-1 text-dark mx-2"
              style={{ backgroundColor: "white", borderRadius: "4px" }}
            >
              <FaCircle style={{ color: "gray" }} /> {row?.locations}
            </div>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Tags",
      selector: (row) => (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="px-4 py-1 text-dark mx-2"
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                border: "1px solid #aebbbb",
              }}
            >
              <FaCircle style={{ color: "gray" }} /> {row?.tags}
            </div>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Enabled",
      selector: (row) => (
        <div className={isDarkMode ? "dark" : ""}>
          <Switch
            initialState={isDarkMode}
            onStateChange={handleDarkModeToggle}
          />
        </div>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "Actions",
      selector: (row) => (
        <>
          <div className="d-flex justify-content-center align-items-center">
          <TbDots className="fs-2"/>
          </div>
        </>
      ),
      sortable: true,
      center: true,
    },
  ];

  return (
    <>
      <div className="row g-3 mt-5" >
        <div className="col-xl-3">
          <Card className="p-3">
            {/* container */}
            <div>
              {/* content */}
              <div className="px-4 py-3">
                <h4 className="fw-bolder fs-5">Summary</h4>
              </div>
              <div className="d-flex gap-5 align-items-center p-3">
                <div>
                  <div
                    className="fs-1 fw-bolder text-center"
                    style={{ color: "gray " }}
                  >
                    836
                  </div>
                  <div className="text-center fs-5 fw-lighter">
                    Configurations
                  </div>
                </div>
                <div>
                  <div
                    className="fs-1 fw-bolder text-center"
                    style={{ color: "gray" }}
                  >
                    0
                  </div>
                  <div className="text-center fs-5 fw-lighter">Disabled</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-xl-9">
          <Card className="p-3">
            {/* container */}
            <div>
              {/* content */}
              <div className="px-4 py-3">
                <h4 className="fw-bolder fs-5">Last 30 days</h4>
              </div>

              <div
                className="d-flex justify-content-center align-items-center mt-4"
                style={{ fontSize: "0.8rem", color: "gray" }}
              >
                No results found
              </div>

              <div
                className="mt-5  d-flex justify-content "
                style={{ width: "max-content" }}
              >
                <div
                  className="px-4 py-1 text-dark mx-2 mt-2"
                  style={{ backgroundColor: "#ffb23a", borderRadius: "4px" }}
                >
                  <FiAlertTriangle />
                </div>
                <div
                  className="px-4 py-1 text-dark mx-2 mt-2"
                  style={{ backgroundColor: "#ffb23a", borderRadius: "4px" }}
                >
                  <FiAlertTriangle />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="p-3 my-4 d-flex justify-content-between">
        <div>
          Showing <b>836 Monitors</b>
        </div>
        <div className="d-flex justify-content-between gap-3">
          <div>Sort by Status</div>
          <div>Group by None</div>
        </div>
      </div>

      {/* second row */}
      <div className="mt-5">
        <TableComponent data={data} columns={columns} />
      </div>
    </>
  );
}

export default Management;
