import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/home';
import { Manager } from './pages/manager';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/manager" element={<Manager />} />
            </Routes>
        </BrowserRouter>
    )
}