import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectAuthFormId } from './../../redux/selectors';
import { userLogin } from './../../redux/auth/operations';
import { Alert } from 'components/Alert/Alert';
import { setAuthFormId } from './../../redux/auth/authSlice';
import { useRef } from 'react';
import { ContactFormInput } from 'components';

export const LoginForm = ({ id }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const formId = useSelector(selectAuthFormId);
  const emailInput = useRef(null);

  const methods = useForm();
  const { handleSubmit, reset } = methods;

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
        <ContactFormInput
          label="Email"
          name="email"
          type="email"
          focus={true}
          required={true}
          placeholder="Enter your email"
        />

        <ContactFormInput
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
