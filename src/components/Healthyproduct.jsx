import React from "react";

export default function Healthyproduct({Image,Image2,Title,Description}) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={Image} className="" alt=""/>
        <div className="card-body d-flex">
          <img src={Image2} className="w-25 h-25" alt=""/>
          <p>
            <strong>{Title}</strong>
            <p>{Description}</p>
          </p>
        </div>
      </div>
    </div>
  );
}
