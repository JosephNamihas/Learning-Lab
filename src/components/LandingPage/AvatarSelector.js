import React, { useState } from 'react';
import AvatarAlex from '.../avatars/Avatar-Alex.png';
import AvatarMona from '.../avatars/Avatar-Mona.png';
import AvatarHope from '.../avatars/Avatar-Hope.png';
import AvatarLux from '.../avatars/Avatar-Lux.png';
import AvatarFlash from '.../avatars/Avatar-Flash.png';
import AvatarNeya from '.../avatars/Avatar-Neya.png';
import AvatarPeony from '.../avatars/Avatar-Peony.png';
import AvatarMario from '.../avatars/AvatarMario.png';
import AvatarZei from '.../avatars/AvatarZei.png';

function AvatarSelector() {
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
        'Avatar-Zei': AvatarZei
    };

    return (
        <div className="landing-page">
            <h1>Welcome to the Learning Lab</h1>
            <div className="login-form">
                {username ? (
                    <div className="user-info">
                        <div className="user-box">
                            <p>{username}</p>
                            {avatar && <img src={avatarMap[avatar.replace('.png', '')]} alt="Selected avatar" />}
                        </div>
                        <button onClick={handleClearStorage}>Delete Avatar</button>
                    </div>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={inputValue}
                            onChange={handleUsernameChange}
                        />
                        <button onClick={handleLogin}>Login</button>
                    </>
                )}
            </div>
            <div className="avatar-choices">
                <select onChange={handleAvatarChange} value={avatar}>
                    <option value="">Select an avatar</option>
                    {Object.keys(avatarMap).map(avatarName => (
                        <option key={avatarName} value={`${avatarName}.png`}>{avatarName}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}


export default AvatarSelector;
