export const FormButton = ({
  type = 'button',
  color = 'info',
  onClick,
  children,
}) => {
  return (
    <button className={`btn btn-${color}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
