import { ContactForm, ContactsList, ContactsListFilter } from 'components';
import { Drawer } from 'components/Drawer/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsDrawerOpen,
  selectSelectedContact,
} from './../../redux/selectors';
import {
  setSelectedContact,
  toggleDrawer,
} from './../../redux/contacts/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(selectIsDrawerOpen);
  const selectedContact = useSelector(selectSelectedContact);

  const toggleContactDrawer = () => {
    if (isDrawerOpen && selectedContact) {
      dispatch(setSelectedContact(null));
    }
    dispatch(toggleDrawer());
  };

  return (
    <div className="flex justify-center min-h-screen bg-base-200">
      <div className="max-w-lg w-full flex flex-col gap-10">
        <ContactsListFilter />
        <ContactsList />

        <Drawer
          id="add-contact-drawer"
          position="end"
          onClick={toggleContactDrawer}
        >
          <ContactForm isDrawerOpen={isDrawerOpen} />
        </Drawer>
      </div>
    </div>
  );
};

export default Contacts;
