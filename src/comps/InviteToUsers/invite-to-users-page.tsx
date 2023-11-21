import React, { FC } from 'react';
import { Users } from '../InviteToUsers/users';
import { IUser } from '../InviteToUsers/user';
import { Success } from '../success';

export const InviteToUsersPage: FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [invitedUsers, setInvitedUsers] = React.useState<number[]>([]);
  const [success, setSuccess] = React.useState(false);

  const addUserToInvited = (id: number) => {
    console.log('addUserToInvited', id, invitedUsers.includes(id));
    invitedUsers.includes(id)
      ? setInvitedUsers((prev) => prev.filter((item) => item != id))
      : setInvitedUsers((prev) => [...prev, id]);
  };

  const sendInvite = () => {
    setSuccess(true);
  };

  const again = () => {
    setInvitedUsers([]);
    setSuccess(false);
  };

  React.useEffect(() => {
    console.log('EFFECT');
    setLoading(true);
    fetch('https://reqres.in/api/users')
      .then((r) => r.json())
      .then((r) => {
        //console.log(r);
        setUsers(r.data);
      })
      .catch((r) => r)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {success ? (
        <Success count={invitedUsers.length} back={again} />
      ) : (
        <Users
          isLoading={loading}
          items={users}
          invitedUsers={invitedUsers}
          addUserToInvited={addUserToInvited}
          sendInvite={sendInvite}
        />
      )}
    </>
  );
};
