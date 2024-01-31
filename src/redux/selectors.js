import { createSelector } from '@reduxjs/toolkit';

export const selectContactsAll = state => state.contacts.items;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectAuthUser = state => state.auth.user;
export const selectAuthError = state => state.auth.error;
export const selectAuthFormId = state => state.auth.formId;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthIsCurrentUserLoaded = state =>
  state.auth.isCurrentUserLoaded;

export const selectFilteredContacts = createSelector(
  [selectContactsAll, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
