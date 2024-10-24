"use client";

import { LogoIcon } from "./svg/LogoIcon";

const Header = () => {


  return (
    <main className="w-screen  flex items-center flex-col">
      <header className="w-full h-[130px] border border-grey rounded-[20px] flex items-center justify-around p-2 bg-gray-200 fixed z-50">
        <div className="flex gap-4 items-center justify-center"> 
          <img src="./Vector.png" alt="" />
       <h2>Dashboard</h2>
       <p>Records</p>
       </div>
       <div className="flex gap-4 items-center">  <div className="btn btn-primary w-30 h-5 rounded-3xl">+ Record</div>
       <img src="./Placeholder.png" alt="photo" width={40} height={40}/></div>
     
      </header>
      <div className="container grid grid-cols-3 gap-6 mt-40"></div>
    </main>
  );
};

export default Header;
