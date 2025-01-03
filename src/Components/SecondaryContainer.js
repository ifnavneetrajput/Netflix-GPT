import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      <div className="-mt-45 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.TopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.UpcomingMovies} />
        <MovieList title={"Popular"} movies={movies?.PopularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
