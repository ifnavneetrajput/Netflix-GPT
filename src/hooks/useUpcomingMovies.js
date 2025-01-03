import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utilis/movieSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async() => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        , API_OPTIONS);
      const json = await data.json();
    
      dispatch(addUpcomingMovies(json.results))
      
    }
    catch (err) {
      console.log("error is ", err);
    }
  }

  useEffect(() => {
    getUpcomingMovies();
  },[])
  
}

export default useUpcomingMovies