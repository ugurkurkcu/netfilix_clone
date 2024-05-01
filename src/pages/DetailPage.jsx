import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import { baseImageUrl } from "../constants";
import Loader from "../components/Loader";
import Error from "../components/Error";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ActorCard from "../components/ActorCard";

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div className="flex justify-center">
      {!movie ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="lg:max-w-[800px] xl:max-w-[1200px] sm:max-w-[600px]">
          <div className="relative h-[40vh]">
            <img
              className="object-cover h-full w-full"
              src={baseImageUrl + movie.backdrop_path}
              alt={movie.title}
            />
            <div className="absolute bg-black inset-0 bg-opacity-40 grid place-items-center">
              <h2 className="font-semibold text-3xl">{movie.title}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
            <div>
              <DetailDisplay title={"Kategori"} data={movie?.genres} />
              <DetailDisplay
                title={"Konuşulan Diller"}
                data={movie?.spoken_languages}
              />
              <DetailDisplay
                title={"Yapımcı Şirketler"}
                data={movie?.production_companies}
              />
              <DetailDisplay
                title={"Yapımcı Ülkeler"}
                data={movie?.production_countries}
              />
            </div>
            <div className="mt-5 gap-5">
              <p>{movie.overview}</p>

              <p>
                <span>Bütçe: </span>
                <span className="text-green-300 ms-2">
                  ${millify(movie.budget)}
                </span>
              </p>

              <p>
                <span>Hasılat: </span>
                <span className="text-green-300 ms-2">
                  ${millify(movie.revenue)}
                </span>
              </p>
            </div>
          </div>
          <Splide
            options={{
              autoWidth: true,
              gap: "20px",
              pagination: false,
              lazyLoad: true,
            }}
          >
            {movie.credits.cast.map((i, index) => (
              <SplideSlide key={index}>
                <ActorCard  actor={i} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
