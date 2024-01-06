export var EmployeeSalary = {
  series: [
    {
      data: [400, 430, 448, 690, 1100, 1200, 1380],
    },
  ],
  colors: ["var(--theme-color1)"],
  chart: {
    type: "bar",
    height: 256,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Nodejs piplelines",
      "Elastic-search-434ghx",
      "Grafana-23uer",
      "Prometheus-ui923",
      "Kafka-23rre1j-2311fgh",
      "Ansible-ops-ass",
      "Kubernetes",
    ],
  },
};
