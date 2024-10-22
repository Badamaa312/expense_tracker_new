"use client";

import { LogoIcon } from "./svg/LogoIcon";

const Header = () => {
  const BACKEND_ENDPOINT = "http://localhost:5555";

  return (
    <main className="w-screen  flex items-center flex-col">
      <header className="w-full h-[130px] border border-grey rounded-[20px] flex items-center justify-around p-2 bg-gray-200 fixed z-50">
        <LogoIcon />
        <div className="flex gap-4">Add record</div>
      </header>
      <div className="container grid grid-cols-3 gap-6 mt-40"></div>
    </main>
  );
};

export default Header;
