import { useDispatch, useSelector } from 'react-redux';
import { FormButton } from 'components';
import {
  selectContactsIsLoading,
  selectFilteredContacts,
} from './../../redux/selectors';
import { useEffect } from 'react';
import {
  deleteContact,
  getAllContacts,
} from './../../redux/contacts/operations';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

export const ContactsList = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ id, name, phone }, index) => (
            <li key={id}>
              <p>{`${++index}. ${name}: ${phone}`}</p>
              <FormButton text="Delete" onClick={() => onDelete(id)} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
