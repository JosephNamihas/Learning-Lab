import React, { useState } from 'react';
import AvatarAlex from '.../avatars/Avatar-Alex.png';
import AvatarMona from '.../avatars/Avatar-Mona.png';
import AvatarHope from '.../avatars/Avatar-Hope.png';
import AvatarLux from '.../avatars/Avatar-Lux.png';
import AvatarFlash from '.../avatars/Avatar-Flash.png';
import AvatarNeya from '.../avatars/Avatar-Neya.png';
import AvatarPeony from '.../avatars/Avatar-Peony.png';

function AvatarSelector() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar') || '');

  const handleLogin = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('avatar', avatar);
  };

  const handleAvatarChange = (e) => {
    const newAvatar = e.target.value;
    localStorage.setItem('avatar', newAvatar);
    setAvatar(newAvatar);
  };

  const handleClearStorage = () => {
    localStorage.clear();
    setAvatar('');
    setUsername('');
  };

  const avatarMap = {
    'Avatar-Alex': AvatarAlex,
    'Avatar-Mona': AvatarMona,
    'Avatar-Hope': AvatarHope,
    'Avatar-Lux': AvatarLux,
    'Avatar-Flash': AvatarFlash,
    'Avatar-Neya': AvatarNeya,
    'Avatar-Peony': AvatarPeony,
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Learning Lab</h1>
      <div className="avatar-choices">
        <select onChange={handleAvatarChange} value={avatar}>
          <option value="">Select an avatar</option>
          {Object.keys(avatarMap).map(avatarName => (
            <option key={avatarName} value={`${avatarName}.png`}>{avatarName}</option>
          ))}
        </select>
        {avatar && <img src={avatarMap[avatar.replace('.png', '')]} alt="Selected avatar" />}
      </div>
      <div className="login-form">
        {username ? (
          <div className="user-info">
            <p>Logged in as {username}</p>
            {avatar && <img src={avatarMap[avatar.replace('.png', '')]} alt="Selected avatar" />}
            <button onClick={handleClearStorage}>Delete Avatar</button>
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </div>
    </div>
  );
}

export default AvatarSelector;
