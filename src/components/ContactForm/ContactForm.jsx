import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { createContact } from './../../redux/contacts/operations';
import { selectContactsAll } from './../../redux/selectors';
import { setError } from './../../redux/contacts/contactsSlice';
import { selectContactsError } from './../../redux/selectors';
import { selectDrawerId } from './../../redux/selectors';
import { closeDrawer } from './../../redux/app/appSlice';
import { Alert } from 'components/Alert/Alert';
import { FormInput, FormButton } from 'components';

export const ContactForm = ({ formDrawerId, isDrawerOpen }) => {
  const nameInput = useRef(null);
  const dispatch = useDispatch();

  const contacts = useSelector(selectContactsAll);
  const error = useSelector(selectContactsError);
  const drawerId = useSelector(selectDrawerId);

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    isDrawerOpen && formDrawerId === drawerId && nameInput.current.focus();
  }, [isDrawerOpen, formDrawerId, drawerId]);

  const contactsExist = ({ name }) => {
    return contacts.find(item =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  const onFormSubmit = data => {
    if (contactsExist(data)) {
      dispatch(setError('Contact already added to your Phonebook'));
      nameInput.current.focus();
      return;
    }

    dispatch(createContact(data))
      .unwrap()
      .then(resp => {
        reset();
        dispatch(closeDrawer('add-contact-drawer'));
      })
      .catch(error => {});
  };

  return (
    <FormProvider {...methods}>
      {error && <Alert type="error">{error}</Alert>}

      <form
        className="flex flex-col gap-5"
        name="contactForm"
        autoComplete="off"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <FormInput
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your Contact Full Name"
          required={true}
          ref={nameInput}
        />
        <FormInput
          label="Number"
          name="number"
          type="tel"
          placeholder="Enter your Contact Phone Number"
          required={true}
        />

        <FormButton type="submit" btnType="btn-info">
          Add contact
        </FormButton>
      </form>
    </FormProvider>
  );
};
