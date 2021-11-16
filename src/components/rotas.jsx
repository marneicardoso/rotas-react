import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './home'
import Sobre from './sobre';
import Usuario from './usuario';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Sobre />} path="/sobre" />
                <Route element={<Usuario />} path="/usuario" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas