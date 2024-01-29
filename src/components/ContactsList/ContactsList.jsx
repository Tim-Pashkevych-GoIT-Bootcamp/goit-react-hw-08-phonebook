import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { ContactFormButton } from 'components';
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
      {isLoading && <h3>Loading...</h3>}

      {contacts.length > 0 && (
        <ul className={css.contactsList}>
          {contacts.map(({ id, name, phone }, index) => (
            <li key={id} className={css.contactListItem}>
              <p>{`${++index}. ${name}: ${phone}`}</p>
              <ContactFormButton text="Delete" onClick={() => onDelete(id)} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
