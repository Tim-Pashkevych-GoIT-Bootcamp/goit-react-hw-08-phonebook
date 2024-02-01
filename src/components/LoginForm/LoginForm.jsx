import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAuthError,
  selectFormId,
  selectModalId,
} from './../../redux/selectors';
import { userLogin } from './../../redux/auth/operations';
import { Alert } from 'components/Alert/Alert';
import { useEffect, useRef } from 'react';
import { FormButton, FormInput } from 'components';
import { setFormId, toggleModal } from './../../redux/app/appSlice';

export const LoginForm = ({ id, isModalOpen }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const formId = useSelector(selectFormId);
  const modalId = useSelector(selectModalId);

  const emailInput = useRef(null);
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (isModalOpen && modalId === id) {
      emailInput.current.focus();
    }
  }, [isModalOpen, modalId, id]);

  const onSubmit = credentials => {
    dispatch(setFormId(id));
    dispatch(userLogin(credentials))
      .unwrap()
      .then(() => {
        reset();
        dispatch(toggleModal());
      })
      .catch(error => {});
  };
  return (
    <FormProvider {...methods}>
      {id === formId && error && <Alert type="error">{error}</Alert>}

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <FormInput
          label="Email"
          name="email"
          type="email"
          focus={true}
          required={true}
          ref={emailInput}
          placeholder="Enter your email"
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          required={true}
          placeholder="Enter your password"
        />

        <FormButton btnType="btn-success" type="submit">
          Login
        </FormButton>
      </form>
    </FormProvider>
  );
};
