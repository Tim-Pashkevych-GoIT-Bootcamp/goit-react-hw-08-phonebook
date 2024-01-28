import { nanoid } from '@reduxjs/toolkit';
import css from './ContactFormInput.module.css';
import { useFormContext } from 'react-hook-form';
import { forwardRef } from 'react';

export const ContactFormInput = forwardRef(function ContactFormInput(
  { label, type, name, required = false, focus = false },
  fieldRef
) {
  const fieldId = nanoid();
  const { register } = useFormContext();
  const { ref, ...restRegister } = register(name);

  return (
    <fieldset className={css.formFieldSet}>
      <label className={css.formLabel} htmlFor={fieldId}>
        {label}:
      </label>
      <input
        id={fieldId}
        type={type}
        name={name}
        autoFocus={focus}
        required={required}
        {...restRegister}
        ref={e => {
          ref(e);
          if (fieldRef) {
            fieldRef.current = e;
          }
        }}
      />
    </fieldset>
  );
});
