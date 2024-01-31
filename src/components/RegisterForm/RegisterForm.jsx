import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from './../../redux/auth/operations';
import { selectAuthError, selectAuthFormId } from './../../redux/selectors';
import { Alert } from 'components/Alert/Alert';
import { setAuthFormId } from './../../redux/auth/authSlice';
import { useEffect, useRef } from 'react';
import { FormButton, FormInput } from 'components';

export const RegisterForm = ({ id, isModalOpen }) => {
  const dispatch = useDispatch();
  const nameInput = useRef(null);
  const error = useSelector(selectAuthError);
  const formId = useSelector(selectAuthFormId);
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    isModalOpen && nameInput.current.focus();
  }, [isModalOpen]);

  const onSubmit = data => {
    dispatch(setAuthFormId(id));
    dispatch(userSignup(data))
      .unwrap()
      .then(res => reset())
      .catch(error => {});
  };

  return (
    <FormProvider {...methods}>
      {formId && formId === id && error && <Alert type="error">{error}</Alert>}
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <FormInput
          label="Full Name"
          name="name"
          type="text"
          required={true}
          ref={nameInput}
          placeholder="Enter your Full Name"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          required={true}
          placeholder="Enter your email"
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          required={true}
          placeholder="Enter your password"
        />

        <FormButton btnType="btn-info" type="submit">
          Register
        </FormButton>
      </form>
    </FormProvider>
  );
};
