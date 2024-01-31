export const FormButton = ({
  type = 'button',
  btnType = 'btn-info',
  onClick,
  children,
}) => {
  return (
    <button className={`btn ${btnType}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
