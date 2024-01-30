import { LoginForm } from 'components/LoginForm/LoginForm';
import { Modal } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { LOGIN_FORM_ID, REGISTER_FORM_ID } from 'utils/constants';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className="btn btn-success"
            onClick={() => document.getElementById(LOGIN_FORM_ID).showModal()}
          >
            Login
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById(REGISTER_FORM_ID).showModal()
            }
          >
            Register
          </button>
        </div>
        <Modal id={LOGIN_FORM_ID}>
          <LoginForm id={LOGIN_FORM_ID} />
        </Modal>
        <Modal id={REGISTER_FORM_ID}>
          <RegisterForm id={REGISTER_FORM_ID} />
        </Modal>
      </div>
    </div>
  );
};

export default Home;
