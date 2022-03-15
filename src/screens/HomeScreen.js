import React from "react";
import { Header } from "../components/header/Header";
import { ShopSection } from "../components/homeComponents/ShopSection";
import { CallToActionSection } from "../components/homeComponents/CallToActionSection";

export const HomeScreen = () => {
  return (
    <div>
      <Header />
      <ShopSection />
      <CallToActionSection />
    </div>
  );
};
