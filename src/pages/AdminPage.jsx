import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';


const AdminPage = () => {


    const { logout } = useContext(AuthContext)

    return (
        <>
            <div>Bem-vindo, Admin!</div>
            <button onClick={logout}>Logout</button>
            <Link to="/dashboard">Dashboard</Link>
        </>
     

    )
};<div>Bem-vindo, Admin!</div>;

export default AdminPage;
