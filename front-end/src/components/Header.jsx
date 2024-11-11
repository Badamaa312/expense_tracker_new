"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AddButton } from "./records/AddButton";

const Header = () => {
  const router = useRouter();

  const LogOutButton = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <header className="w-full flex items-center justify-around pt-4 pb-4">
      <div className="flex gap-4 items-center justify-center">
        <img src="./Vector.png" alt="" />
        <Link href="./dashboard">Dashboard</Link>
        <Link href="./records">Records</Link>
      </div>
      <div className="flex gap-6 items-center">
        <AddButton />
        <img src="./Placeholder.png" alt="photo" width={40} height={40} />
        <Link href="./login">
          <button
            className="h-8 w-[99px] bg-[#0166FF] flex items-center justify-center rounded-[20px] gap-1 text-white"
            onClick={LogOutButton}
          >
            logout
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
