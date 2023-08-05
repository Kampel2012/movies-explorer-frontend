import FilterCheckbox from '../../UI/FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <fieldset className="search-form__field-text">
            <input
              type="search"
              placeholder="Фильм"
              className="search-form__input"
            />
            <button className="search-form__submit-btn">Поиск</button>
          </fieldset>
          <FilterCheckbox text={'Короткометражки'} />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
