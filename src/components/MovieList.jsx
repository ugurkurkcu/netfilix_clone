import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { baseImageUrl } from "../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const params = {
      with_genres: genre.id,
    };
    api
      .get(`/discover/movie`, { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log("error: ", err.message));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-2xl">{genre.name}</h1>

      <Splide
        options={{
          autoWidth: true,
          gap: "20px",
          pagination: false,
          lazyLoad: true,
        }}
      >
        {movies.map((i, index) => (
          <SplideSlide key={index}>
            <Link to={`/movie/${i.id}`}>
              <img
                className="max-w-[300px] poster-shadow h-full cursor-pointer rounded-lg"
                src={baseImageUrl + i.poster_path}
                alt="Image 1"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
