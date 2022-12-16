import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardTableMyClass from "components/Cards/CardTableMyClass.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardTableClaseProfesor from "components/Cards/CardTableClasesProfesor.js";

export default function Dashboard() {
  return (
    <>
      {/* <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div> */}
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardTableClaseProfesor />
        </div>
      </div>
    </>
  );
}
