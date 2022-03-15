import React from "react";
import { Header } from "../components/header/Header";
import { ShopSection } from "../components/homeComponents/ShopSection";
import { CallToActionSection } from "../components/homeComponents/CallToActionSection";
import { ContactInfo } from "../components/homeComponents/ContactInfo";

export const HomeScreen = () => {
  return (
    <div>
      <Header />
      <ShopSection />
      <CallToActionSection />
      <ContactInfo />
    </div>
  );
};
