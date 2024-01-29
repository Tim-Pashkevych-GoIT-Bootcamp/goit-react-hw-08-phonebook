import css from './ContactForm.module.css';
import { ContactFormInput, ContactFormButton } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from './../../redux/contacts/operations';
import { selectContactsAll } from './../../redux/selectors';
import { toast } from 'react-toastify';
import { useRef } from 'react';

export const ContactForm = () => {
  const ref = useRef(null);
  const contacts = useSelector(selectContactsAll);
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const contactsExist = ({ name }) => {
    return contacts.find(item =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  const onFormSubmit = data => {
    if (contactsExist(data)) {
      toast.error('Contact already added to your Phonebook');
      ref.current.focus();
      return;
    }

    dispatch(createContact(data))
      .unwrap()
      .catch(error => {
        toast.error(error);
      });
    reset();
    ref.current.focus();
  };

  return (
    <FormProvider {...methods}>
      <form
        className={css.form}
        name="contactForm"
        autoComplete="off"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <ContactFormInput
          label="Name"
          name="name"
          type="text"
          focus={true}
          required={true}
          ref={ref}
        />
        <ContactFormInput
          label="Number"
          name="phone"
          type="tel"
          required={true}
        />
        <ContactFormButton text="Add contact" type="submit" />
      </form>
    </FormProvider>
  );
};
