export const Modal = ({ id, close, children }) => {
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
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
