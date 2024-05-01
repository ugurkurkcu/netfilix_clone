import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getPopular } from "../redux/actions/movieActions";
import { getGenres } from "../redux/actions/genreActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const { isLoading, error, genres } = useSelector((store) => store.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);
  return (
    <div>
      <Hero />
      <div >
        {!genres || isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          genres?.map((i, index) => <MovieList key={index} genre={i} />)
        )}
      </div>
    </div>
  );
};

export default MainPage;
