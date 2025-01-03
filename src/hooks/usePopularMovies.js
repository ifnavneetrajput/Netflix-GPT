import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utilis/movieSlice';
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async() => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        , API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results))
    }
    catch (err) {
      console.log("error is ", err);
    }
  }

  useEffect(() => {
    getPopularMovies();
  },[])

}

export default usePopularMovies