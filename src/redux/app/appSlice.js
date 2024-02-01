import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDrawerOpen: false,
  isModalOpen: false,
  drawerId: null,
  modalId: null,
  formId: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleModal(state, { payload }) {
      state.modalId = payload;
      state.isModalOpen = !state.isModalOpen;
    },
    setFormId(state, { payload }) {
      state.formId = payload;
    },
    toggleDrawer(state, { payload }) {
      state.drawerId = payload;
      state.isDrawerOpen = !state.isDrawerOpen;
      state.error = null;
    },
    openDrawer(state, { payload }) {
      state.drawerId = payload;
      state.isDrawerOpen = true;
    },
    closeDrawer(state, { payload }) {
      state.drawerId = payload;
      state.isDrawerOpen = false;
      state.error = null;
    },
  },
});

export const appReducer = appSlice.reducer;
export const { openDrawer, closeDrawer, toggleDrawer, toggleModal, setFormId } =
  appSlice.actions;
