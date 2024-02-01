import { useSelector } from 'react-redux';

import { selectIsDrawerOpen } from './../../redux/selectors';
import {
  ContactEditForm,
  ContactForm,
  ContactsList,
  ContactsListFilter,
} from 'components';
import { Drawer } from 'components/Drawer/Drawer';

const Contacts = () => {
  const isDrawerOpen = useSelector(selectIsDrawerOpen);

  return (
    <div className="flex justify-center min-h-screen bg-base-200">
      <div className="max-w-lg w-full flex flex-col gap-10">
        <ContactsListFilter />
        <ContactsList />

        <Drawer id="add-contact-drawer" position="end">
          <ContactForm
            formDrawerId="add-contact-drawer"
            isDrawerOpen={isDrawerOpen}
          />
        </Drawer>
        <Drawer id="edit-contact-drawer" position="end">
          <ContactEditForm
            formDrawerId="edit-contact-drawer"
            isDrawerOpen={isDrawerOpen}
          />
        </Drawer>
      </div>
    </div>
  );
};

export default Contacts;
