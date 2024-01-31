export const FormButton = ({ text, type = 'button', onClick }) => {
  return (
    <button className="btn btn-info" type={type} onClick={onClick}>
      {text}
    </button>
  );
};
