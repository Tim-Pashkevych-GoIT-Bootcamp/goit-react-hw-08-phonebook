import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDrawerId, selectIsDrawerOpen } from './../../redux/selectors';
import { toggleDrawer } from './../../redux/app/appSlice';

export const Drawer = ({ id, position = 'start', onClick, children }) => {
  const dispatch = useDispatch();
  const [checked = false, setChecked] = useState();
  const drawerId = useSelector(selectDrawerId);
  const isDrawerOpen = useSelector(selectIsDrawerOpen);

  useEffect(() => {
    if (id === drawerId && isDrawerOpen) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [id, drawerId, isDrawerOpen]);

  const toggleContactDrawer = () => {
    dispatch(toggleDrawer(id));

    if (id === drawerId && checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <div className={`drawer drawer-${position}`}>
      <input
        id={id}
        type="checkbox"
        className="drawer-toggle"
        checked={checked}
        onChange={toggleContactDrawer}
      />
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
