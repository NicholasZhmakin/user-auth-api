import React from "react";
import AlertsList from "./AlertsList";

const MessageBox = ({ loading, syntaxError, sendingError }) => {
  let message;
  if (loading) {
    message = <h3 className="container text-center">Loading...</h3>;
  }
  if (syntaxError) {
    message = <AlertsList alerts={syntaxError} />;
  }
  if (sendingError) {
    message = <div className="container bg-warning p-2">{sendingError}</div>;
  }
  return (
    <div className="container text-center col-10 col-lg-5 mx-auto mb-4">
      {message}
    </div>
  );
};

export default MessageBox;
