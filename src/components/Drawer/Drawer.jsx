export const Drawer = ({ id, children, position = 'start' }) => {
  return (
    <div className={`drawer drawer-${position}`}>
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {children}
        </div>
      </div>
    </div>
  );
};
