import { useDispatch } from 'react-redux';
import { changeFilter } from './../../redux/contacts/filterSlice';
import { FiSearch } from 'react-icons/fi';

export const ContactsListFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">
          <FiSearch size={20} />
        </span>
      </div>
      <input
        type="text"
        name="filter"
        placeholder="Search"
        className="input input-bordered w-full max-w-xs px-10"
        onChange={event => dispatch(changeFilter(event.target.value.trim()))}
      />
    </div>
  );
};
