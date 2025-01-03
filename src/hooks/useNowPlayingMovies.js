import { API_OPTIONS } from "../utilis/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilis/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

   const getNowPlayingMovies = async () => {
     try {
       const response = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing?&page=1",
         API_OPTIONS
       );
      
       const json = await response.json();
      
       dispatch(addNowPlayingMovies(json.results));
     } catch (error) {
       console.error("API Request Error:", error);
     }
   };

  
  
  
  
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

};
export default useNowPlayingMovies;