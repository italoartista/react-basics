import React from 'react';
import { Link } from 'react-router-dom';
// import Chat from '../components/Chat';
const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Login</Link>
            {/* <Chat /> */}
        </div>
    );
};

export default HomePage;
