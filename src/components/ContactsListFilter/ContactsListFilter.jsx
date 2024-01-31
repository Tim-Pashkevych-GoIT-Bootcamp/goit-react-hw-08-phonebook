import { useDispatch } from 'react-redux';
import { changeFilter } from './../../redux/contacts/filterSlice';
import { ContactFormInput } from 'components';

export const ContactsListFilter = () => {
  const dispatch = useDispatch();

  return (
    <label className="form-control w-full max-w-xs">
      <input
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        className="input input-bordered w-full max-w-xs"
        onChange={event => dispatch(changeFilter(event.target.value.trim()))}
      />
    </label>
  );
};
