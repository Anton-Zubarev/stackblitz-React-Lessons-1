import React, { FC } from 'react';

import '../style.scss';

export const Modal: FC<{
  title?: string;
  open: boolean;
  setOpen: (boolean) => void;
  children?: any;
}> = ({ title, open, setOpen, children }) => {
  return (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        <div className='header'>
          <span className='title'>{title || ''}</span>
          <svg
            onClick={() => setOpen(false)}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title>{title || 'Закрыть'}</title>
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        </div>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};
