import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectAuthFormId } from './../../redux/selectors';
import { userLogin } from './../../redux/auth/operations';
import { Alert } from 'components/Alert/Alert';
import { setAuthFormId } from './../../redux/auth/authSlice';

export const LoginForm = ({ id }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const formId = useSelector(selectAuthFormId);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = credentials => {
    dispatch(setAuthFormId(id));
    dispatch(userLogin(credentials))
      .unwrap()
      .then(res => reset())
      .catch(error => {});
  };
  return (
    <>
      {id === formId && error && <Alert type="error">{error}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
            {...register('email', { required: true })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
            {...register('password', { required: true })}
          />
        </label>
        <button className="btn btn-info">Login</button>
      </form>
    </>
  );
};
