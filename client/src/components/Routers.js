import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "../pages/Auth.page";
import { BasketPage } from "../pages/Basket.page";
import { DevicePage } from "../pages/Device.page";
import { ManagementPage } from "../pages/Management.page";
import { ShopPage } from "../pages/Shop.page";

// function that distributes routes
export const Routers = ({ isAuth, admin }) => {
  return (
    <Routes>
      {isAuth ? <Route path="/basket" element={<BasketPage />} /> : null}
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/device/:id" element={<DevicePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/shop" />} />
    </Routes>
  );
};
