import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import TripDetail from './pages/TripDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="trip/:id" element={<TripDetail />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
