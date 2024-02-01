import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { updateContact } from './../../redux/contacts/operations';
import { selectContactsError } from '../../redux/selectors';
import { selectSelectedContact } from '../../redux/selectors';
import { selectDrawerId } from '../../redux/selectors';
import { closeDrawer } from '../../redux/app/appSlice';
import { Alert } from 'components/Alert/Alert';
import { FormInput, FormButton } from 'components';

export const ContactEditForm = ({ formDrawerId, isDrawerOpen }) => {
  const nameInput = useRef(null);
  const dispatch = useDispatch();

  const error = useSelector(selectContactsError);
  const selectedContact = useSelector(selectSelectedContact);
  const drawerId = useSelector(selectDrawerId);

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    isDrawerOpen && formDrawerId === drawerId && nameInput.current.focus();
  }, [isDrawerOpen, formDrawerId, drawerId]);

  const onFormSubmit = data => {
    dispatch(updateContact({ id: selectedContact.id, constact: data }))
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
          value={selectedContact?.name}
          type="text"
          placeholder="Enter your Contact Full Name"
          required={true}
          ref={nameInput}
        />
        <FormInput
          label="Number"
          name="number"
          value={selectedContact?.number}
          type="tel"
          placeholder="Enter your Contact Phone Number"
          required={true}
        />

        <FormButton type="submit" btnType="btn-warning">
          Update contact
        </FormButton>
      </form>
    </FormProvider>
  );
};
