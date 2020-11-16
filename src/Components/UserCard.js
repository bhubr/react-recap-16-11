import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => {
  const {login, id, avatar_url: avatarUrl } = props;
  return (
    <div>
      <h3>{id} : {login}</h3>
      <img src={avatarUrl} alt={login} />
    </div>
  )
}

// UserCard.defaultProps = {
//   login: 'Unknown',
// };

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default UserCard;