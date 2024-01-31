import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectAuthFormId } from './../../redux/selectors';
import { userLogin } from './../../redux/auth/operations';
import { Alert } from 'components/Alert/Alert';
import { setAuthFormId } from './../../redux/auth/authSlice';
import { useEffect, useRef } from 'react';
import { FormInput } from 'components';

export const LoginForm = ({ id, isModalOpen }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const formId = useSelector(selectAuthFormId);
  const emailInput = useRef(null);
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    isModalOpen && emailInput.current.focus();
  }, [isModalOpen]);

  const onSubmit = credentials => {
    dispatch(setAuthFormId(id));
    dispatch(userLogin(credentials))
      .unwrap()
      .then(res => reset())
      .catch(error => {});
  };
  return (
    <FormProvider {...methods}>
      {id === formId && error && <Alert type="error">{error}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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

        <button className="btn btn-info">Login</button>
      </form>
    </FormProvider>
  );
};
