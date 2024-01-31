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
import { Loader } from 'components/Loader/Loader';
import { setSelectedContact } from './../../redux/contacts/contactsSlice';

export const ContactsList = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const onUpdate = id => {
    dispatch(setSelectedContact(id));
    document.getElementById('add-contact-drawer').click();
  };

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Loader />}

      {contacts.length > 0 && (
        <ul className="flex flex-col divide-y-2">
          {contacts.map(({ id, name, number }, index) => (
            <li
              key={id}
              className="flex flex-row gap-5 justify-start justify-items-center py-3"
            >
              <div className="flex-grow">
                <div className="text-xl font-bold capitalize">{name}</div>
                <div className="">{number}</div>
              </div>
              <div className="flex gap-3">
                <FormButton color="warning" onClick={() => onUpdate(id)}>
                  Update
                </FormButton>
                <FormButton color="error" onClick={() => onDelete(id)}>
                  Delete
                </FormButton>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
