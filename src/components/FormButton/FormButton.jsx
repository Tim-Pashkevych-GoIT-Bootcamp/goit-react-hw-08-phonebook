export const FormButton = ({
  type = 'button',
  btnType = '',
  onClick,
  children,
}) => {
  return (
    <button className={`btn ${btnType}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
