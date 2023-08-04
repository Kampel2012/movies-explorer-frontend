import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <>
      <Header isAuth={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
