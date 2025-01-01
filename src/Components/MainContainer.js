import React from 'react'
import VideoBackground from './VideoBackground'
import TitleVideo from './TitleVideo'
import { useSelector } from 'react-redux'

export const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies)
  if (!movies) return;
  
  const mainMovie = movies[0];
 

  const { original_title, overview ,id} = mainMovie;
  return (
    <div>
      <TitleVideo title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}
export default MainContainer;