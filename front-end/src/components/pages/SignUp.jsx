"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { LogoIcon } from "@/components/svg/LogoIcon";

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage("");
      try {
        const response = await fetch("http://localhost:1234/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();

        if (response.ok) {
          router.push("/login");
        } else {
          setErrorMessage(data.message || "Error occurred");
        }
      } catch (error) {
        setErrorMessage("Network error");
      }
    },
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      toast.success("you already login");
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full flex items-center justify-end pr-[126px]">
          <div className="w-[484px] h-[826px] flex flex-col gap-10">
            <div className="flex justify-center items-center gap-[10px] p-[6px]">
              <LogoIcon />
            </div>
            <h1 className="text-2xl font-bold mb-6 text-center text-black">
              Sign up below to create your Wallet account
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name ? (
                  <div className="text-red-600">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email ? (
                  <div className="text-red-600">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password ? (
                  <div className="text-red-600">{formik.errors.password}</div>
                ) : null}
              </div>

              {errorMessage && (
                <div className="mb-4 text-red-600">{errorMessage}</div>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600"
              >
                Sign Up
              </button>
            </form>
            <div className="flex flex-col items-center py-3 w-full gap-3">
              <p>if you have account please Login</p>
              <Link href="/login">
                <button className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 w-full">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF] w-1/2 h-full"></div>
      </div>
    </>
  );
};
