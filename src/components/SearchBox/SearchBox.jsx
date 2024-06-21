import { nanoid } from 'nanoid';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const contactSearch = nanoid();
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchWrapper}>
      <label htmlFor={contactSearch}>Find contacts by name</label>
      <input
        type="text"
        value={filterName}
        name="contactSearch"
        id={contactSearch}
        onChange={handleFilterChange}
      />
    </div>
  );
}
