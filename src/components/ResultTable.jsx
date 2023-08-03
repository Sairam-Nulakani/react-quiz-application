import React from "react";

const ResultTable = () => {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>Sairam Nulakani</td>
            <td>07</td>
            <td>70</td>
            <td>Passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
