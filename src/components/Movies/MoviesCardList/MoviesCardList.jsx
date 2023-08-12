import { useEffect, useState } from 'react';
import LoadingButton from '../LoadingButton/LoadingButton';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';
import useDebounce from '../../hooks/useDebounce';

function MoviesCardList({
  isLoading,
  movies,
  savedMovies,
  saveMovie,
  removeMovie,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedCards, setDisplayedCards] = useState(0);
  const [multiplay, setMultiplay] = useState(1);

  const handleResizeDeb = useDebounce(() => {
    setWindowWidth(window.innerWidth);
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', handleResizeDeb);
    return () => {
      window.removeEventListener('resize', handleResizeDeb);
    };
  }, [handleResizeDeb]);

  useEffect(() => {
    const initialCardCount = getCount(windowWidth);
    setDisplayedCards(initialCardCount * multiplay);
  }, [multiplay, windowWidth]);

  function handleOnClick() {
    setMultiplay((prev) => prev + 1);
  }

  const checkSave = (item) =>
    savedMovies.find((mov) => mov.movieId === item.id);

  function getCount(windowWidth) {
    let initialCardCount;
    if (windowWidth >= 1280) {
      initialCardCount = 3;
    }
    if (windowWidth < 1280 && windowWidth >= 768) {
      initialCardCount = 3;
    }
    if (windowWidth < 768 && windowWidth >= 550) {
      initialCardCount = 4;
    }
    if (windowWidth < 550) {
      initialCardCount = 5;
    }
    return initialCardCount;
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <div className="movies-card-list__wrapper">
          {movies.slice(0, displayedCards).map((item) => (
            <MoviesCard
              key={item.id}
              card={item}
              _id={Boolean(checkSave(item)) ? checkSave(item)._id : null}
              saveMovie={saveMovie}
              removeMovie={removeMovie}
            />
          ))}
        </div>
        <div className="movies-card-list__load">
          {isLoading ? (
            <Preloader />
          ) : (
            displayedCards <= movies.length && (
              <LoadingButton handleOnClick={handleOnClick} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
