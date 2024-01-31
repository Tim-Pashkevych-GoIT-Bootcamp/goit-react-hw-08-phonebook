import { ContactForm, ContactsList, ContactsListFilter } from 'components';
import { Drawer } from 'components/Drawer/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsDrawerOpen } from './../../redux/selectors';
import { toggleDrawer } from './../../redux/contacts/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(selectIsDrawerOpen);

  return (
    <div className="flex justify-center min-h-screen bg-base-200">
      <div className="text-center">
        <div className="max-w-md">
          <ContactsListFilter />
          <ContactsList />

          <Drawer
            id="add-contact-drawer"
            position="end"
            onClick={() => dispatch(toggleDrawer())}
          >
            <ContactForm isDrawerOpen={isDrawerOpen} />
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
