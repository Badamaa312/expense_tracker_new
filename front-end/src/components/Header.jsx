"use client";

import Link from "next/link";
import { AddRecord } from "./AddRecords";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-around pt-4 pb-4">
      <div className="flex gap-4 items-center justify-center">
        <img src="./Vector.png" alt="" />
        <Link href="./dashboard">Dashboard</Link>
        <Link href="./records">Records</Link>
      </div>
      <div className="flex gap-4 items-center">
        <AddRecord />
        <img src="./Placeholder.png" alt="photo" width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;
