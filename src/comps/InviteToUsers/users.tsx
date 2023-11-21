import React, { FC } from 'react';
import { Skeleton } from './skeleton';
import { IUser, User } from './user';

export const Users: FC<{
  items: IUser[];
  isLoading: boolean;
  invitedUsers: number[];
  addUserToInvited: (id: number) => void;
  sendInvite: () => void;
}> = ({ items, isLoading, invitedUsers, addUserToInvited, sendInvite }) => {
  const [search, setSearch] = React.useState('');

  console.log('invitedUsers', invitedUsers);
  return (
    <div style={{ background: 'ghostwhite' }}>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          onChange={(e) => setSearch(e.currentTarget.value)}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((item) =>
              search
                ? item.first_name.toLowerCase().indexOf(search) >= 0 ||
                  item.last_name.toLowerCase().indexOf(search) >= 0 ||
                  item.email.toLowerCase().indexOf(search) >= 0
                : true
            )
            .map((item) => (
              <User
                key={item.id}
                user={{ ...item }}
                addUserToInvited={addUserToInvited}
                isInvited={invitedUsers.includes(item.id)}
              />
            ))}
        </ul>
      )}
      {invitedUsers.length > 0 && (
        <button onClick={() => sendInvite()} className="send-invite-btn">
          Отправить приглашение
        </button>
      )}
    </div>
  );
};
