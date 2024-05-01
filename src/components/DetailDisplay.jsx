import React from "react";
import { baseImageUrl } from "../constants";

const DetailDisplay = ({ title, data }) => {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-5 mt-5">{title}</h1>
      <div className="flex flex-row gap-5 items-center">
        {data.map((i, index) =>
          i.logo_path ? (
            <div key={index} className=" rounded-md bg-white">
              <img
                className="max-h-[60px] p-2"
                src={baseImageUrl + i.logo_path}
                alt=""
              />
            </div>
          ) : (
            <span
              className="text-sm border rounded-md p-1 border-yellow-400 text-yellow-400"
              key={index}
            >
              {i.name}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default DetailDisplay;
