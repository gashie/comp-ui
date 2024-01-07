//import GaugeComponent from "react-gauge-component";

import GaugeComponent from "react-gauge-component";

//import "./styles.css";

function SpeedometerComponent() {
  return (
    <>
      <GaugeComponent
        value={50}
        type="radial"
        // labels={{
        //   tickLabels: {
        //     type: "inner",
        //     ticks: [
        //       { value: 20 },
        //       { value: 40 },
        //       { value: 60 },
        //       { value: 80 },
        //       { value: 100 },
        //     ],
        //   },
        // }}
        // arc={{
        //   colorArray: ["#5BE12C", "#EA4228"],
        //   subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
        //   padding: 0.02,
        //   width: 0.3,
        // }}
        arc={{
          subArcs: [
            {
              limit: 20,
              color: "#EA4228",
              showTick: true,
            },
            {
              limit: 40,
              color: "#F58B19",
              showTick: true,
            },
            {
              limit: 60,
              color: "#F5CD19",
              showTick: true,
            },
            {
              limit: 100,
              color: "#5BE12C",
              showTick: true,
            },
          ],
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
      />
    </>
  );
}

export default SpeedometerComponent;
