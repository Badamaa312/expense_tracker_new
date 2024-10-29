"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      toast.success("you already login");
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 h-full flex flex-col items-center justify-center pr-[126px">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Welcome to the Geld
        </h1>
        <div className="flex justify-around gap-6">
          <Link href="/signup">
            <button className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 bg-[#0166FF] h-full"></div>
    </div>
  );
};

export default Home;
