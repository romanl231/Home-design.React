import React from "react";
import Link from "../../shared/components/Link";
import Logo from "shared/components/Logo";
import ChatButton from "./ChatButton";

const Header: React.FC = () => {
   return (
    <header className="sticky top-0 z-50 w-full bg-[#F3EEE8] shadow-md">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="flex items-center gap-8">
            <Link linkText="Products" navigateTo="/products" />
            <Link linkText="Rooms" navigateTo="/rooms" />
            <Link linkText="Services" navigateTo="/services" />
            <Link linkText="Inspirations" navigateTo="/inspirations" />
          </nav>
        </div>

        <ChatButton navigateTo="/chat" />
      </div>
    </header>
  );
};

export default Header;