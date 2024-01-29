import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from './../../redux/auth/operations';
import { selectAuthError } from './../../redux/selectors';
import { Alert } from 'components/Alert/Alert';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(userSignup(data));
    reset();
  };
  return (
    <>
      {error && <Alert type="error">{error}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Full Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="input input-bordered w-full max-w-xs"
            {...register('name', { required: true })}
          />
        </label>
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
        <button className="btn btn-info">Register</button>
      </form>
    </>
  );
};
