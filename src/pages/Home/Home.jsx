import { LoginForm } from 'components/LoginForm/LoginForm';
import { Modal } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalOpen } from './../../redux/selectors';
import { LOGIN_FORM_ID, REGISTER_FORM_ID } from 'utils/constants';
import { toggleModal } from './../../redux/app/appSlice';

const Home = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Be organized</h1>
          <p className="py-6">
            This app helps you to keep your contacts under your control. You can
            easily add, update, and delete contacts from your list. The search
            feature helps you to find the person you need in just a few clicks.
          </p>
          <div className="flex gap-5 justify-center">
            <button
              className="btn btn-success"
              onClick={() => dispatch(toggleModal(LOGIN_FORM_ID))}
            >
              Login
            </button>
            <button
              className="btn btn-info"
              onClick={() => dispatch(toggleModal(REGISTER_FORM_ID))}
            >
              Register
            </button>
          </div>
        </div>
        <Modal
          close={() => dispatch(toggleModal(LOGIN_FORM_ID))}
          id={LOGIN_FORM_ID}
        >
          <LoginForm isModalOpen={isModalOpen} id={LOGIN_FORM_ID} />
        </Modal>
        <Modal
          close={() => dispatch(toggleModal(REGISTER_FORM_ID))}
          id={REGISTER_FORM_ID}
        >
          <RegisterForm isModalOpen={isModalOpen} id={REGISTER_FORM_ID} />
        </Modal>
      </div>
    </div>
  );
};

export default Home;
