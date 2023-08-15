import { useEffect, useState } from 'react';
import FilterCheckbox from '../../UI/FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ filter, handleSubmitSearch, isLoading }) {
  const [shortFilmsFilter, setShortFilmsFilter] = useState(filter.isShort);
  const [seachValue, setSearchValue] = useState(filter.partOfName);

  function handleOnSubmit(e) {
    e.preventDefault();
    handleSubmitSearch({
      partOfName: seachValue,
      isShort: shortFilmsFilter,
    });
  }

  useEffect(() => {
    handleSubmitSearch({
      partOfName: filter.partOfName,
      isShort: shortFilmsFilter,
    });
  }, [shortFilmsFilter]);

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={(e) => handleOnSubmit(e)}>
          <fieldset className="search-form__field-text">
            <input
              type="text"
              placeholder="Фильм"
              className="search-form__input"
              required={true}
              value={seachValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button disabled={isLoading} className="search-form__submit-btn">
              Поиск
            </button>
          </fieldset>
          <FilterCheckbox
            text={'Короткометражки'}
            shortFilmsFilter={shortFilmsFilter}
            setShortFilmsFilter={setShortFilmsFilter}
          />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
