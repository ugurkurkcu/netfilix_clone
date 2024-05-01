import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import { baseImageUrl } from "../constants";

const Hero = () => {
  const { isLoading, error, movies } = useSelector((store) => store.movies);
  const i = Math.floor(Math.random() * movies?.results.length);
  const movie = movies?.results[i];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-h-[500px] gap-5 mb-10">
      {isLoading || !movie ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{movie?.title}</h1>
            <p className="max-w-[600px]  text-center">{movie?.overview}</p>
            <p>
              <span>YEAR: </span>
              <span className="mr-10 text-yellow-500">
                {movie?.release_date.slice(0, 4)}
              </span>
              <span>IMDB: </span>
              <span className="text-yellow-500">
                {movie?.vote_average?.toFixed(1)}
              </span>
            </p>

            <div className="flex gap-5">
              <button className="border-red-600 border-2 p-2 text-red-600 rounded-xl font-bold btn-shadow">
                Filmi Izle
              </button>
              <button className="border-red-600 border-2 p-2 text-black bg-red-600 rounded-xl font-bold btn-shadow">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="my-4 object-contain rounded max-h-[400px]  hero-img"
              src={baseImageUrl + movie?.backdrop_path}
              alt={movie?.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
