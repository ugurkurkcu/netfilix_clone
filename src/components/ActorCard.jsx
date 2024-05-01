import React from "react";
import { baseImageUrl } from "../constants";
import Loader from "./Loader";

const ActorCard = ({ actor }) => {
  return (
    <div>
      {actor.profile_path && (
        <div className="w-[150px] line-clamp-2">
          <img
            className="h-[175px] "
            src={baseImageUrl + actor.profile_path}
            alt={actor.original_name}
          />
          <h2 className="text-sm font-bold">{actor.original_name}</h2>
          <h2 className="text-md text-gray-400 font-medium">
            {actor.character}
          </h2>
        </div>
      )}
    </div>
  );
};

export default ActorCard;
