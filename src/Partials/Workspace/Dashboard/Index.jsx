import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Chart from "react-apexcharts";

import { CardData } from "./Components/DashboardData";
import { RecentSellers } from "./Components/DashboardData";
import { SalesRevenueData } from "./Components/DashboardData";
import { YearData } from "./Components/DashboardData";

import { MyAnalytics } from "./Components/MyAnalyticsChart";
import { SalesAnalytics } from "./Components/SalesAnalyticsChart";
import { EmployeeSalary } from "./Components/EmployeeSalaryChart";
import CountingAnimation from "../../../Common/CommonCounting/CountingAnimation";

import profileImage from "../../../assets/images/profile_av.png";
import avatar5 from "../../../assets/images/xs/avatar5.jpg";
import avatar6 from "../../../assets/images/xs/avatar6.jpg";
import avatar1 from "../../../assets/images/xs/avatar1.jpg";
import avatar4 from "../../../assets/images/xs/avatar4.jpg";
import CardAction from "../../Widgets/CardAction/CardAction";
import img from '../../../assets/images/img.png'

const Index = () => {
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);

  const [chartKey, setChartKey] = useState(0); // Add a key to force chart refresh

  useEffect(() => {
    // Update the key whenever rightbarHidden changes to force chart refresh
    setChartKey((prevKey) => prevKey + 1);
  }, [screenWidth]);

  const healthData = [
    {
      name: "Postgres SQL DB (Latest Changes - 2days ago)",
      level: 0.2,
      status: "Healthy",
      text_color: "#5bc43a",
    },
    {
      name: "External Git piepline (Latest Changes - 1day ago)",
      level: 0.2,
      status: "Danger",
      text_color: "red",
    },
    {
      name: "Elastic DB deployment (Latest Changes - 25mins ago)",
      level: 0.2,
      status: "Moderate",
      text_color: "gold",
    },
    {
      name: "Postgres SQL DB",
      level: 0.2,
      status: "Moderate",
      text_color: "gold",
    },
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
          <h2 className="fw-bold mb-xl-2">Workspace</h2>
          <p className="fw-lighter text-light w-100" style={{ fontSize: "0.8em" }}>
            Agent policies are used to manage settings across a group of agents. You can add integrations to your agent policy to specify what your agents collect. When you edit an agent policy, you can use Fleet to deploy updates to a specified group of agents.
          </p>
        </div>
        <div className="col-xl-4 col-lg-4 d-flex justify-content-end">
          <img src={img} alt="Your Image"  className="img-fluid" width='300' />
        </div>
      </div>
    </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row g-4 li_animate">
            <div className="col-xl-4 col-lg-4 card-body">
              {/* <span className="small">Welcome back!</span>
              <h2 className="fw-bold mb-xl-5 mb-4">My Dashboard</h2> */}
              <h4 className="mb-0 text-dark title-font fs-5">
                Recently Visited Applications
              </h4>
              <div className="d-flex align-items-start mt-3">
                {/* <img
                  className="avatar lg rounded-circle border border-3"
                  src={profileImage}
                  alt="avatar"
                /> */}
                <i
                  className="bi-layers-fill fs-5 px-2 py-1 "
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(39,44,46,1) 0%, rgba(10,10,11,1) 100%)",
                    borderRadius: "10px",
                    color: "white",
                  }}
                ></i>
                <div className="ms-3">
                  <h4 className="mb-0 text-dark title-font fs-5">
                    AWS Resource Explorer
                  </h4>
                  <span className="text-muted small">
                    "Power up your web app with our sleek (Bvite) Bootstrap
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                {/* <img
                  className="avatar lg rounded-circle border border-3"
                  src={profileImage}
                  alt="avatar"
                /> */}
                <i
                  className="bi-layers-fill fs-5 px-2 py-1 "
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,237,3,1) 0%, rgba(219,255,0,1) 100%)",
                    borderRadius: "10px",
                    color: "white",
                  }}
                ></i>
                <div className="ms-3">
                  <h4 className="mb-0 text-dark title-font fs-5">EC2</h4>
                  <span className="text-muted small">
                    "Power up your web app with our sleek (Bvite) Bootstrap
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                {/* <img
                  className="avatar lg rounded-circle border border-3"
                  src={profileImage}
                  alt="avatar"
                /> */}
                <i
                  className="bi-layers-fill fs-5 px-2 py-1 "
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,36,237,1) 0%, rgba(0,198,255,1) 100%)",
                    borderRadius: "10px",
                    color: "white",
                  }}
                ></i>
                <div className="ms-3">
                  <h4 className="mb-0 text-dark title-font fs-5">
                    Elastic Container Registry Service
                  </h4>
                  <span className="text-muted small">
                    "Power up your web app with our sleek (Bvite) Bootstrap
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                {/* <img
                  className="avatar lg rounded-circle border border-3"
                  src={profileImage}
                  alt="avatar"
                /> */}
                <i
                  className="bi-layers-fill fs-5 px-2 py-1 "
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(246,82,82,1) 0%, rgba(255,8,8,1) 100%)",
                    borderRadius: "10px",
                    color: "white",
                  }}
                ></i>
                <div className="ms-3">
                  <h4 className="mb-0 text-dark title-font fs-5">CloudWatch</h4>
                  <span className="text-muted small">
                    "Power up your web app with our sleek (Bvite) Bootstrap
                  </span>
                </div>
              </div>
              <h4
                className="mb-0 text-dark title-font mt-5 fw-bolder"
                style={{ fontSize: "0.8rem", cursor: "pointer" }}
              >
                View Applications <i className="bi-chevron-down fw-bolder "></i>
              </h4>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
              <ul className="list-inline d-flex flex-column mb-0 ms-5 ms-sm-0 ps-4 ps-sm-0">
                {healthData.map((data, index) => {
                  return (
                    <li key={index} className="list-inline-item mb-4">
                      <span className="small text-muted">
                        {data.name}
                        <span
                          className={`ps-2 ${data.icon} ${data.text_color}`}
                        >
                          {" "}
                          <i
                            className="fa fa-bullseye mx-1"
                            style={{ color: data.text_color }}
                          ></i>
                          {data.status}
                        </span>
                      </span>
                      <h6 className="mb-0 mt-1">
                        <CountingAnimation
                          start={0}
                          separator={"."}
                          currency={"%"}
                          end={data.level}
                          duration={5000}
                        />
                      </h6>
                    </li>
                  );
                })}
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-primary px-lg-3 py-lg-2"
                  >
                    View Reports
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8">
              <h4 className="mb-0 text-dark title-font fs-5 mb-5">
                Manange Billings and Cost
              </h4>
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
        </div>
      </div>
      <div className="row g-3">
        {CardData.map((data, index) => {
          return (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="card p-3 px-4">
                <div>{data.title}</div>
                <div className="py-4 m-0 text-center h2">
                  <CountingAnimation
                    start={0}
                    separator={"."}
                    currency={data.currency}
                    end={data.value}
                    duration={5000}
                  />
                </div>
                <div className="d-flex">
                  <small className="text-muted">{data.year}</small>
                  <div className="ms-auto">{data.per}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-xxl-8 col-xl-7 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Git Deployment Monitor</h6>
              <div className="dropdown card-action">
                <CardAction />
              </div>
            </div>
            <div className="card-body">
              <div>
                <Chart
                  key={chartKey}
                  options={SalesAnalytics}
                  series={SalesAnalytics.series}
                  height={SalesAnalytics.chart.height}
                  type={SalesAnalytics.chart.type}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Usage (Request)</h6>
              <div className="dropdown card-action">
                <CardAction />
              </div>
            </div>
            <div
              className="card-body custom_scroll"
              style={{ height: "320px" }}
            >
              <table className="table table-hover mb-0">
                <tbody>
                  {SalesRevenueData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td style={{ fontSize: "0.8rem" }}>
                          {data.country}
                          <div
                            className="progress mt-1"
                            style={{ height: "2px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: data.width }}
                            ></div>
                          </div>
                        </td>
                        <td className="text-end" style={{ fontSize: "0.9rem" }}>
                          <span className="text-muted">{data.revenue}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Active Monitors</h6>
              <div className="dropdown card-action">
                <CardAction />
              </div>
            </div>
            <div className="card-body py-1">
              <div>
                <Chart
                  key={chartKey}
                  options={EmployeeSalary}
                  series={EmployeeSalary.series}
                  height={EmployeeSalary.chart.height}
                  type={EmployeeSalary.chart.type}
                />
              </div>
            </div>
            <div className="card-footer py-2">
              <a href="#" title="my task">
                View report<i className="fa fa-long-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Invited Users</h6>
              <div className="dropdown card-action">
                <CardAction />
              </div>
            </div>
            <div
              className="card-body custom_scroll"
              style={{ height: "320px" }}
            >
              <ul
                className="list-group list-group-flush user-list mb-0"
                role="tablist"
              >
                {RecentSellers.map((data, index) => {
                  return (
                    <li key={index} className="list-group-item b-dashed">
                      <a href="#" className="d-flex">
                        {data.img ? (
                          <img
                            className="avatar rounded-circle"
                            src={data.img}
                            alt=""
                          />
                        ) : (
                          <div className="avatar rounded-circle no-thumbnail">
                            {data.initial}
                          </div>
                        )}
                        <div className="flex-fill ms-3">
                          <h6 className="d-flex justify-content-between mb-0">
                            <span>{data.name}</span>
                          </h6>
                          <span
                            className="text-light small badge p-1"
                            style={{ backgroundColor: "gold" }}
                          >
                            Pending
                          </span>
                          <span className="text-dark mx-2 small badge p-1">
                            test-email@gmail.com
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
