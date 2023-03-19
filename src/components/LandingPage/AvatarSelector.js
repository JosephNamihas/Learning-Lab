import React, { useState } from 'react';
import AvatarAlex from './avatars/Avatar-Alex.png';
import AvatarMona from './avatars/Avatar-Mona.png';
import AvatarHope from './avatars/Avatar-Hope.png';
import AvatarLux from './avatars/Avatar-Lux.png';
import AvatarFlash from './avatars/Avatar-Flash.png';
import AvatarNeya from './avatars/Avatar-Neya.png';
import AvatarPeony from './avatars/Avatar-Peony.png';
import AvatarMario from './avatars/Avatar-Mario.png';
import AvatarZei from './avatars/Avatar-Zei.png';
import { Button, Container, Form, InputGroup, DropdownButton } from "react-bootstrap";
import styles from "./styles.avatars.css";

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
        <Container className="welcome-message py-5 text-center">
          <h2>Welcome to the Learning Lab, <span>{username} !</span></h2>
          <div className="user-info">
            <div>
              {avatar && <img className="user-box" src={avatarMap[avatar.replace('.png', '')]} alt="Selected avatar" />}
            </div>
            <Button 
              className="change-profile avatar-btn"              
              variant="outline-success" 
              onClick={handleClearStorage}> Change Profile
            </Button>
          </div>
        </Container>
      ) : (
        <Container className="login-form py-5 text-center name-area">
          <h2>Welcome to the Learning Lab</h2>
          <InputGroup>
          <Form.Control
          
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
          <Button 
            className="avatar-btn"
            variant="outline-success" 
            onClick={handleLogin}>Login
          </Button>
          </InputGroup>
        </Container>
      )}
    </div>
  );
}
export default Login;