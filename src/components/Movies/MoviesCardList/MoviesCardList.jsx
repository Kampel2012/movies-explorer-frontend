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
  isEmptyQuestion,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedCards, setDisplayedCards] = useState(0);
  const [multiplay, setMultiplay] = useState(4);

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
    if (windowWidth < 550) {
      setDisplayedCards(1 + initialCardCount * multiplay);
    } else {
      setDisplayedCards(initialCardCount * multiplay);
    }
  }, [multiplay, windowWidth]);

  function handleOnClick() {
    if (windowWidth < 550) {
      setMultiplay((prev) => prev + 2);
    } else {
      setMultiplay((prev) => prev + 1);
    }
  }

  const checkSave = (item) =>
    savedMovies.find((mov) => mov.movieId === item.id);

  function getCount(windowWidth) {
    let initialCardCount;
    if (windowWidth >= 768) {
      initialCardCount = 3;
    }
    if (windowWidth < 768 && windowWidth >= 550) {
      initialCardCount = 2;
    }
    if (windowWidth < 550) {
      initialCardCount = 1;
    }
    return initialCardCount;
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {!isEmptyQuestion && movies.length === 0 && (
          <p className="movies-card-list__message">
            По данному запросу ничего не найдено
          </p>
        )}
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
            displayedCards < movies.length && (
              <LoadingButton handleOnClick={handleOnClick} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
