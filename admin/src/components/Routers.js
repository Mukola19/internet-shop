import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CatalogPage } from "../pages/Catalog.page";
import { LoginPage } from "../pages/Login.page";

export const Routers = ({ isAdmin }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {isAdmin ? (
        <>
          <Route path="/catalog" element={<CatalogPage />} />
        </>
      ) : null}
    </Routes>
  );
};
