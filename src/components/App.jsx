import {
  ContactForm,
  ContactsList,
  ContactsListFilter,
  Section,
} from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <ContactsListFilter />
        <ContactsList />
      </Section>

      <ToastContainer />
    </>
  );
};
