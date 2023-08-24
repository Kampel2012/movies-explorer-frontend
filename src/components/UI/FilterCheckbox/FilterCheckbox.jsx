import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ text, shortFilmsFilter, setShortFilmsFilter }) {
  const [checked, setChecked] = useState(shortFilmsFilter);

  const handleChange = () => {
    setChecked(!checked);
    setShortFilmsFilter(!checked);
  };

  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className="filter-checkbox__slider"></span>
      <span className="filter-checkbox__text">{text}</span>
    </label>
  );
}

export default FilterCheckbox;
