import React, { FC, ReactNode } from 'react';

export const ListGroup: FC<{ children: ReactNode }> = (props) => {
  return (
    <ul
      //   className='bg-white rounded-lg border border-gray-200 text-gray-900 rounded-md mb-4'
      className='border border-gray-800 bg-gray-900 mb-4'
    >
      {props.children}
    </ul>
  );
};
export const ListGroupItem: FC<{ children: ReactNode }> = (props) => {
  return (
    <li className='px-6 py-4 border-b border-gray-800 w-full flex items-center space-x-4'>
      {props.children}
    </li>
  );
};
