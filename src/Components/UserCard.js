import React from 'react';

const UserCard = (props) => {
  const {login, id, avatar_url} = props;
  return (
    <div>
      <h3>{id} : {login}</h3>
      <img src={avatar_url} alt={login} />
    </div>
  )
}

export default UserCard;