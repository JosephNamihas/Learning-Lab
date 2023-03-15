import React, { useState } from 'react';
import AvatarAlex from '../assets/Avatar-Alex.png';
import AvatarMona from '../assets/Avatar-Mona.png';
import AvatarHope from '../assets/Avatar-Hope.png';
import AvatarLux from '../assets/Avatar-Lux.png';
import AvatarFlash from '../assets/Avatar-Flash.png';
import AvatarNeya from '../assets/Avatar-Neya.png';
import AvatarPeony from '../assets/Avatar-Peony.png';
import AvatarMario from '../assets/Avatar-Mario.png';
import AvatarZei from '../assets/Avatar-Zei.png';

function Login() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar') || '');
  const [inputValue, setInputValue] = useState('');

  const handleLogin = () => {
    setUsername(inputValue);
    localStorage.setItem('username', inputValue);
    localStorage.setItem('avatar', avatar);
  };

  const handleUsernameChange = (e) => {
    setInputValue(e.target.value);
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
    'Avatar-Mario': AvatarMario,
    'Avatar-Zei': AvatarZei,
    
    
  };

  return (
    <div className="landing-page">
      {username ? (
        <div className="welcome-message">
          <h1>Welcome to the Learning Lab, {username}!</h1>
          <div className="user-info">
            <div className="user-box">
              {avatar && <img src={avatarMap[avatar.replace('.png', '')]} alt="Selected avatar" />}
              <p>{username}</p>
            </div>
            <button onClick={handleClearStorage}> Change Profile</button>
          </div>
        </div>
      ) : (
        <div className="login-form">
          <h1>Welcome to the Learning Lab</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={inputValue}
            onChange={handleUsernameChange}
          />
          <div className="avatar-choices">
            <select onChange={handleAvatarChange} value={avatar}>
              <option value="">Select an avatar</option>
              {Object.keys(avatarMap).map(avatarName => (
                <option key={avatarName} value={`${avatarName}.png`}>{avatarName}</option>
              ))}
            </select>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
export default Login;