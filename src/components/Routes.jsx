/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CardBlog from './CardBlog.jsx';
import Home from './home.jsx';
import About from './About.jsx';
import MyPhysicalActivity from './MyPhysicalActivity.jsx';
import MyMestrualCalendar from './MyMestrualCalendar.jsx';
import MyDiet from './MyDiet.jsx';
import MyDreams from './MyDreams.jsx';
import MyPysicologyTest from './MyPysicologyTest.jsx';
import MyCalendar from './MyCalendar.jsx';
import Nav from './nav.jsx';

function RoutesApp() {
    const [showContainer, setShowContainer] = useState(true);

    useEffect(() => {
        const currentRoute = window.location.pathname;

        // Verificar si la ruta actual es "/login"
        if (currentRoute === '/login') {
            setShowContainer(true);
        } else {
            setShowContainer(false);
        }
    }, []);

    return (
        <div>
            <BrowserRouter>
                <div className='bg-slate-900'>
                    <Nav />
                </div>

                {/* Condicionalmente renderizar el contenedor basado en el estado */}
                {showContainer && (
                    <div className='container mx-auto px-4'>
                        <CardBlog />
                    </div>
                )}

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mycalendar" element={<MyCalendar />} />
                    <Route path="/mypysicologytest" element={<MyPysicologyTest />} />
                    <Route path="/myphysicalactivity" element={<MyPhysicalActivity />} />
                    <Route path="/mymestrualcalendar" element={<MyMestrualCalendar />} />
                    <Route path="/mydreams" element={<MyDreams />} />
                    <Route path="/mydiet" element={<MyDiet />} />
                    <Route path="/login" element={<CardBlog />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesApp;
