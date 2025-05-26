import React from 'react';
import './UserProfileCard.css';
import { getDefaultNormalizer } from '@testing-library/dom';

const UserProfileCardFunc = ({ image, name, skill, location, hobby, language, email }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}'s profile`} />
      <h1>{name}</h1>
      <div className="card-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Skill:</strong> {skill}</p>
        <p><strong>Language:</strong> {language}</p>
        <p><strong>Hobby:</strong> {hobby}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
      <button>Log In</button>
    </div>
  );
};

export default UserProfileCardFunc;