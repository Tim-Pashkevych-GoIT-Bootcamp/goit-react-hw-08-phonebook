import {
  ContactForm,
  ContactsList,
  ContactsListFilter,
  Section,
} from 'components';
import { Drawer } from 'components/Drawer/Drawer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  return (
    <div className="flex justify-center min-h-screen bg-base-200">
      <div className="text-center">
        <div className="max-w-md">
          <ContactsListFilter />
          <ContactsList />

          <Drawer id="add-contact-drawer" position="end">
            <ContactForm />
          </Drawer>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
