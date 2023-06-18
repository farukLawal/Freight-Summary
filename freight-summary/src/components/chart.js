import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsData from "highcharts/modules/data";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";

// Import any other necessary Highcharts modules
// ...

// Load the additional Highcharts modules
HighchartsData(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

const Chart = () => {
  useEffect(() => {
    fetch(
      "https://www.ssyreports.com/api/ExampleEodCapeIndex/ArfNBYtWnXr9sTHq/20230605"
    )
      .then((response) => response.json())
      .then((data) => {
        const seriesData = [];

        for (let i = 0; i < data.length; i++) {
          seriesData.push([
            new Date(data[i].priceDate).getTime(),
            data[i].price,
          ]);
        }

        // Create the chart
        Highcharts.stockChart("container", {
          rangeSelector: {
            selected: 1,
          },
          title: {
            text: "Cape Index prices over the past year",
          },
          series: [
            {
              name: "price",
              data: seriesData,
              type: "spline",
              tooltip: {
                valueDecimals: 2,
              },
            },
          ],
        });
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });
  }, []);

  return (
    <div
      className="container-xxl"
      id="container"
      style={{ height: "600px" }}
    ></div>
  );
};

export default Chart;
