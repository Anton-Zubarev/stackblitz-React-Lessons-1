import React, { FC } from 'react';

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export const User: FC<{
  user: IUser;
  addUserToInvited: (id: number) => void;
  isInvited: boolean;
}> = ({ user, addUserToInvited, isInvited }) => {
  const addUser = (id: number) => {
    addUserToInvited(id);
  };

  return (
    <li>
      <div>
        <img className="avatar" src={user.avatar} alt="User" />
        <div>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <p>
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
              <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
            </svg>
            {user.email}
          </p>
        </div>
      </div>
      <img
        onClick={() => addUser(user.id)}
        className="action"
        src={`/assets/${isInvited ? 'minus' : 'plus'}.svg`}
        alt="Action"
      />
    </li>
  );
};
