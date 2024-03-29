import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContactsIsLoading,
  selectFilteredContacts,
} from './../../redux/selectors';
import {
  deleteContact,
  getAllContacts,
} from './../../redux/contacts/operations';
import { setSelectedContact } from './../../redux/contacts/contactsSlice';
import { openDrawer } from './../../redux/app/appSlice';
import { FormButton } from 'components';
import { Loader } from 'components/Loader/Loader';

export const ContactsList = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const onUpdate = id => {
    dispatch(setSelectedContact(id));
    dispatch(openDrawer('edit-contact-drawer'));
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
                <FormButton btnType="btn-warning" onClick={() => onUpdate(id)}>
                  Update
                </FormButton>
                <FormButton btnType="btn-error" onClick={() => onDelete(id)}>
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
