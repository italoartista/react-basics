import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const UserPage = () => {
    const { authState, logout } = useContext(AuthContext);
    const user = authState ? authState.user : null; // Verifique se authState existe antes de tentar acessar user

    return (
    <>
        <h1 style={{color: "white"}} >Bem-vindo, {user}</h1>
        <button onClick={logout}>Logout</button>
    </>
    )
};

export default UserPage;