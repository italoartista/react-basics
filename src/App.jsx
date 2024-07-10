import "./App.css";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<ProtectedRoute><DashboardPage roles={['admin']} /></ProtectedRoute>} /> 
                  
                    <Route path="/admin" element={<ProtectedRoute roles={['admin']}><AdminPage /></ProtectedRoute>} />
                    <Route path="/user" element={<ProtectedRoute roles={['user', 'admin', 'editor', 'revisor']}><UserPage /></ProtectedRoute>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;