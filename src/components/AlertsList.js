import React from "react";
import uuid from "uuid";

const AlertsList = ({ alerts }) => {
  return (
    <React.Fragment>
      {alerts.map(alert => (
        <div key={uuid.v4()} className="bg-danger text-light p-2 mb-2 rounded">
          {alert}
        </div>
      ))}
    </React.Fragment>
  );
};

export default AlertsList;
