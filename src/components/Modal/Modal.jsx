import { useSelector } from 'react-redux';
import { selectIsModalOpen, selectModalId } from './../../redux/selectors';

export const Modal = ({ id, close, children }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const modalId = useSelector(selectModalId);

  return (
    <dialog
      id={id}
      className={`modal modal-bottom sm:modal-middle ${
        isModalOpen && modalId === id && 'modal-open'
      }`}
    >
      <div className="modal-box">
        <form method="dialog">
          <button
            onClick={close}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div className="py-4">{children}</div>
      </div>
    </dialog>
  );
};
