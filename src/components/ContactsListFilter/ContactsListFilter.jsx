import { useDispatch } from 'react-redux';
import { changeFilter } from './../../redux/filterSlice';
import css from './../ContactFormInput/ContactFormInput.module.css';

export const ContactsListFilter = () => {
  const dispatch = useDispatch();

  return (
    <fieldset className={css.formFieldSet}>
      <label className={css.formLabel} htmlFor="searchField">
        Find contacts by name:
      </label>
      <input
        id="searchField"
        type="text"
        onChange={event => dispatch(changeFilter(event.target.value.trim()))}
      />
    </fieldset>
  );
};
