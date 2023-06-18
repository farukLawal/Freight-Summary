import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tables.css";

const Tables = ({ data, date }) => {
  const vesselRouteCodes = ["CP1", "CP2", "CP3", "CP4", "CP5", "CP7"];

  // Helper function to check if data is available for a given index
  const isDataAvailable = (index) => {
    return data && data[index] && data[index].length > 0;
  };

  return (
    <React.Fragment>
      <p></p>
      <h5 className="mb-3 p-3">{date}</h5>

      <div className="container-xxl d-flex flex-wrap flex-md-nowrap table-container  p-0">
        {vesselRouteCodes.slice(0, 2).map((route, index) => (
          <div className="flex-grow-1 me-3 ps-4" key={index}>
            <table className="table caption-top table-responsive-md table table-striped table-bordered ">
              <caption className="text-center">
                {route}: {getCaptionText(route)}
              </caption>
              <thead>
                <tr>
                  <th scope="col">Period Code</th>
                  <th scope="col">End-of-Day Price ($)</th>
                  <th scope="col">Day-on-Day Movements ($)</th>
                </tr>
              </thead>
              <tbody>
                {isDataAvailable(index) ? (
                  data[index].map((item, idx) => (
                    <tr key={idx}>
                      <th scope="row">{item.periodCode}</th>
                      <td>{item.price}</td>
                      <td>{item.doD}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      Unable to get data for the date entered.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="container-xxl d-flex flex-wrap flex-md-nowrap table-container p-0">
        {vesselRouteCodes.slice(2, 4).map((route, index) => (
          <div className="flex-grow-1 me-3 mt-4 ps-3" key={index}>
            <table className="table caption-top table-responsive-md table table-striped table-bordered">
              <caption className="text-center">
                {route}: {getCaptionText(route)}
              </caption>
              <thead>
                <tr>
                  <th scope="col">Period Code</th>
                  <th scope="col">End-of-Day Price ($)</th>
                  <th scope="col">Day-on-Day Movements ($)</th>
                </tr>
              </thead>
              <tbody>
                {isDataAvailable(index + 2) ? (
                  data[index + 2].map((item, idx) => (
                    <tr key={idx}>
                      <th scope="row">{item.periodCode}</th>
                      <td>{item.price}</td>
                      <td>{item.doD}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      Unable to get data for the date entered.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="container-xxl d-flex flex-wrap flex-md-nowrap table-container  p-0">
        {vesselRouteCodes.slice(4, 6).map((route, index) => (
          <div className="flex-grow-1 me-3 mt-4 ps-3" key={index}>
            <table className="table caption-top table-responsive-md table table-striped table-bordered">
              <caption className="text-center">
                {route}: {getCaptionText(route)}
              </caption>
              <thead>
                <tr>
                  <th scope="col">Period Code</th>
                  <th scope="col">End-of-Day Price ($)</th>
                  <th scope="col">Day-on-Day Movements ($)</th>
                </tr>
              </thead>
              <tbody>
                {isDataAvailable(index + 4) ? (
                  data[index + 4].map((item, idx) => (
                    <tr key={idx}>
                      <th scope="row">{item.periodCode}</th>
                      <td>{item.price}</td>
                      <td>{item.doD}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      Unable to get data for the date entered.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

// Helper function to get caption text for each route
const getCaptionText = (route) => {
  switch (route) {
    case "CP1":
      return "Hampton Roads / Rotterdam";
    case "CP2":
      return "Tubarao / Rotterdam";
    case "CP3":
      return "Tubarao / Qingdao";
    case "CP4":
      return "Richards Bay / Rotterdam";
    case "CP5":
      return "West Australia / Qingdao";
    case "CP7":
      return "Bolivar / Rotterdam";
    default:
      return "";
  }
};

export default Tables;
