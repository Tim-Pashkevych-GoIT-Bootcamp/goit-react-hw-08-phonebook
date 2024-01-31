import { useFormContext } from 'react-hook-form';
import { forwardRef, useEffect } from 'react';

export const FormInput = forwardRef(function FormInput(
  {
    label,
    type,
    name,
    value,
    placeholder = '',
    required = false,
    focus = false,
  },
  fieldRef
) {
  const { register, setValue } = useFormContext();
  const { ref, ...restRegister } = register(name);

  useEffect(() => {
    setValue(name, value);
  }, [name, value, setValue]);

  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        autoFocus={focus}
        required={required}
        placeholder={placeholder}
        {...restRegister}
        ref={e => {
          ref(e);
          if (fieldRef) {
            fieldRef.current = e;
          }
        }}
        className="input input-bordered w-full "
      />
    </label>
  );
});
