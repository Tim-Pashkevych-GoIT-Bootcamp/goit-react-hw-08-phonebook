import { useFormContext } from 'react-hook-form';
import { forwardRef } from 'react';

export const ContactFormInput = forwardRef(function ContactFormInput(
  { label, type, name, placeholder = '', required = false, focus = false },
  fieldRef
) {
  const { register } = useFormContext();
  const { ref, ...restRegister } = register(name);

  return (
    <label className="form-control w-full max-w-xs">
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
        className="input input-bordered w-full max-w-xs"
      />
    </label>
  );
});
