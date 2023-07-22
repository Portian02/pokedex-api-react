import React from 'react'
import { Routes, Route } from "react-router-dom";


const Routing = () => {
  return (
    <Routes>
      {/* SOLO SE MOSTRARÁN AL INICIAR SESIÓN  */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/Perfil" element={<Perfil />} />
       
      </Route>

      <Route path="/Sesion" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;