"use client";

import { LogoIcon } from "@/components/svg/LogoIcon";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [customer, setCustomer] = useState({});

  const BACKEND_ENDPOINT = "http://localhost:1234/sign-up";

  const handleOnSubmit = async (event) => {
    console.log(customer);

    try {
      event.preventDefault();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}`, options);
      const data = await response.json();
    } catch {
      console.log("error");
    }

    // Sign-Up hiij bui hesgiig hoosolj bn
    setCustomer({
      name: "",
      email: "",
      password: "",
    });
    // document.getElementById("my_modal_1").close();
  };

  // input ni name bolon value-r tanih

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setCustomer((prevCustomer) => {
      return {
        ...prevCustomer,
        [name]: value,
      };
    });
  };

  return (
    <main className="">
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full flex items-center justify-end pr-[126px]">
          <div className="w-[484px] h-[826px] flex flex-col gap-10">
            <div className="flex justify-center items-center gap-[10px] p-[6px]">
              <LogoIcon />
            </div>
            <div className="flex justify-center items-center gap-[10px] p-[6px]">
              <p className="text-base font-normal text-[#334155] ">
                Sign up below to create your Wallet account
              </p>
            </div>
            <div className="modal-box ml-6">
              <h3 className="text-lg font-bold">Create account</h3>
              <div className="flex flex-col gap-3 mt-4">
                <input
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="name"
                  className="w-full input input-bordered"
                  value={customer?.name}
                />
                <input
                  name="email"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="email"
                  className="w-full input input-bordered"
                  value={customer?.email}
                />
                <input
                  name="password"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="password"
                  className="w-full input input-bordered"
                  value={customer?.password}
                />
                <input
                  name="password"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Re-password"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="modal-action flex gap-4">
                <Link href="./admin">
                  <button
                    className="btn btn-primary rounded-[20px] text-xl leading-7 text-white"
                    type="submit"
                    onClick={handleOnSubmit}
                  >
                    Sign Up
                  </button>
                </Link>
                <form method="dialog" className="">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>

            <div className="flex gap-1 h-8 justify-center items-center">
              <p className="text-[#0F172A] text-base font-normal">
                Do you have an account?
              </p>
              <Link href="./sign-in">
                <button className="text-[#0166FF] pl-8 text-base font-normal leading-6">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF] w-1/2 h-full"></div>
      </div>
    </main>
  );
}
