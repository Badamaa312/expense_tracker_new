"use client";

import { useState } from "react";
import { WhitePlusIcon } from "../svg/WhitePlus";
import { CloseIcon } from "../svg/Close";
import { OneIcon } from "../svg/icons/1";
import { ArrowDropDown } from "../svg/ArrowDropDown";
import { TwoIcon } from "../svg/icons/2";
import { ThreeIcon } from "../svg/icons/3";
import { FourIcon } from "../svg/icons/4";
import { FiveIcon } from "../svg/icons/5";
import { SixIcon } from "../svg/icons/6";
import { Numbers } from "../svg/icons/Numbers";
import { SevenIcon } from "../svg/icons/7";
import { EigthIcon } from "../svg/icons/8";
import { NineIcon } from "../svg/icons/9";
import { TenthIcon } from "../svg/icons/10";
import { EleventhIcon } from "../svg/icons/11";
import { TwelweIcon } from "../svg/icons/12";
import { ThirteenIcon } from "../svg/icons/13";
import { FourteenIcon } from "../svg/icons/14";
import { FifteenIcon } from "../svg/icons/15";
import { SixteenIcon } from "../svg/icons/16";
import { SeventeenIcon } from "../svg/icons/17";
import { EighteenIcon } from "../svg/icons/18";
import { NineteenIcon } from "../svg/icons/19";
import { TwentyIcon } from "../svg/icons/20";
import { TwentyOneIcon } from "../svg/icons/21";
import { TwentyTwoIcon } from "../svg/icons/22";
import { TwentyThreeIcon } from "../svg/icons/23";
import { TwentyFourIcon } from "../svg/icons/24";
import { TwentyFiveIcon } from "../svg/icons/25";
import { TwentySixIcon } from "../svg/icons/26";
import { TwentySevenIcon } from "../svg/icons/27";
import { TwentyNineIcon } from "../svg/icons/29";
import { ThirtyIcon } from "../svg/icons/30";
import { TwentyEightIcon } from "../svg/icons/28";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

export const Category = () => {
  // const router = useRouter();

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     icon_color: "",
  //     category_icon: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().name("Please insert name".required("Required")),
  //   }),
  //   onSubmit: async (values) => {
  //     try {
  //       const response = await fetch("http://localhost:1234/category", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(values),
  //       });

  //       const data = await response.json();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // });

  return (
    <div>
      <button
        className="h-8 w-full bg-[#0166FF] flex items-center justify-center rounded-[20px] gap-1"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <WhitePlusIcon />
        <p className="text-[14px] leading-4 font-[400] text-[white] ">
          Add category
        </p>
      </button>
      <dialog
        id="my_modal_2"
        className="modal flex justify-center items-center gap-10"
      >
        <div className="bg-white rounded-xl p-0 flex flex-col gap-6 w-[450px]">
          <div className="w-full flex items-center justify-between h-[50px] border-b border-b-[#E2E8F0] py-[24px] px-[30px]">
            <h3 className="text-[20px] leading-7 font-[600]">Add category</h3>
            <form
              method="dialog"
              className="flex justify-between items-center "
            >
              <button className=" top-1">
                <CloseIcon />
              </button>
            </form>
          </div>
          <div className="flex justify-center h-[150px] gap-6 p-6">
            <div className=" flex flex-col gap-5 mr-4 ml-4">
              <div className="flex justify-around w-[450px] gap-3 ">
                <button
                  className="btn ml-4"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <OneIcon />
                  <ArrowDropDown />
                </button>
                <dialog
                  id="my_modal_3"
                  className="top-[270px] left-[-70px] p-[24px] modal"
                >
                  <div className=" w-[312px] modal-box flex flex-col gap-6">
                    <div className="grid grid-cols-6 grid-rows-5 gap-6 ">
                      <OneIcon />
                      <TwoIcon />
                      <ThreeIcon />
                      <FourIcon />
                      <FiveIcon />
                      <SixIcon />
                      <SevenIcon />
                      <EigthIcon />
                      <NineIcon />
                      <TenthIcon />
                      <EleventhIcon />
                      <TwelweIcon />
                      <ThirteenIcon />
                      <FourteenIcon />
                      <FifteenIcon />
                      <SixteenIcon />
                      <SeventeenIcon />
                      <EighteenIcon />
                      <NineteenIcon />
                      <TwentyIcon />
                      <TwentyOneIcon />
                      <TwentyTwoIcon />
                      <TwentyThreeIcon />
                      <TwentyFourIcon />
                      <TwentyFiveIcon />
                      <TwentySixIcon />
                      <TwentySevenIcon />
                      <TwentyEightIcon />
                      <TwentyNineIcon />
                      <ThirtyIcon />
                    </div>
                    <p className="border-b border-b-[#E2E8F0] w-full"></p>
                    <div className="grid grid-cols-7 gap-6">
                      <p className="w-[24px] h-[24px] bg-[#0166FF] rounded-[50%]"></p>
                      <p className="w-[24px] h-[24px] bg-[#01B3FF] rounded-[50%]"></p>
                      <p className="w-[24px] h-[24px] bg-[#41CC00] rounded-[50%]"></p>
                      <p className="w-[24px] h-[24px] bg-[#F9D100] rounded-[50%]"></p>
                      <p className="w-[24px] h-[24px] bg-[#FF7B01] rounded-[50%]"></p>
                      <p className="w-[24px] h-[24px] bg-[#AE01FF] rounded-[50%]"></p>
                      <p className="w-[24px] h-[24px] bg-[#FF0101] rounded-[50%]"></p>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>
                      <CloseIcon />
                    </button>
                  </form>
                </dialog>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-[350px] bg-[#F3F4F6]  mr-4  "
                />
              </div>
              <button className=" h-10 bg-[#16A34A] rounded-lg mr-4 ml-4">
                Add
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

{
  /* 
                <details className="dropdown flex gap-2 ">
                  <summary className="btn flex items-center gap-2">
                    <OneIcon />
                    <ArrowDropDown />
                  </summary>

                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                      <img src="./Frame.png" alt="" />
                    </li>
                    <li>
                      <div className="grid grid-cols-7 gap-6">
                        <p className="w-[24px] h-[24px] bg-[#0166FF] rounded-[50%]"></p>
                        <p className="w-[24px] h-[24px] bg-[#01B3FF] rounded-[50%]"></p>
                        <p className="w-[24px] h-[24px] bg-[#41CC00] rounded-[50%]"></p>
                        <p className="w-[24px] h-[24px] bg-[#F9D100] rounded-[50%]"></p>
                        <p className="w-[24px] h-[24px] bg-[#FF7B01] rounded-[50%]"></p>
                        <p className="w-[24px] h-[24px] bg-[#AE01FF] rounded-[50%]"></p>
                        <p className="w-[24px] h-[24px] bg-[#FF0101] rounded-[50%]"></p>
                      </div>
                    </li>
                  </ul>
                </details> */
}
