import { FormInput, FormButton } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from './../../redux/contacts/operations';
import { selectContactsAll } from './../../redux/selectors';
import { useEffect, useRef } from 'react';
import { setError } from './../../redux/contacts/contactsSlice';
import { selectContactsError } from './../../redux/selectors';
import { Alert } from 'components/Alert/Alert';

export const ContactForm = ({ isDrawerOpen }) => {
  const nameInput = useRef(null);
  const contacts = useSelector(selectContactsAll);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    isDrawerOpen && nameInput.current.focus();
  }, [isDrawerOpen]);

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
        document.getElementById('add-contact-drawer').click();
      })
      .catch(error => {});
  };

  return (
    <FormProvider {...methods}>
      {error && <Alert type="error">{error}</Alert>}

      <form
        name="contactForm"
        autoComplete="off"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <FormInput
          label="Name"
          name="name"
          type="text"
          required={true}
          ref={nameInput}
        />
        <FormInput label="Number" name="number" type="tel" required={true} />

        <FormButton text="Add contact" type="submit" />
      </form>
    </FormProvider>
  );
};
