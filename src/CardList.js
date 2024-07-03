import React from "react";
import CardDetails from "./CardDetails";

const CardList = ({data}) => {
  return (
    <div className="row gap-2">

      {data.map((elm) => (
        <CardDetails data={elm} className="col-4" />
      ))}
    
    
    </div>
  );
};

export default CardList;
