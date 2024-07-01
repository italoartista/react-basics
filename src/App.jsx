
import "./App.css";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PdfGenerator from "./components/PdfGenerator";

function App() {
    return (
       <PdfGenerator />
    );
}

export default App;
