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

export const Category = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [isColor, setIsColor] = useState(true);

  const ChangeBgColor = () => {
    setIsClicked(!isClicked);
    setIsColor(!isColor);
  };
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
              <div className="flex justify-between w-[450px] gap-1 ">
                {/* <button
                  className="btn ml-4"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                ></button> */}

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
                </details>

                {/* <dialog
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
                    <button>close</button>
                  </form>
                </dialog> */}
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-[350px] bg-[#F3F4F6]  mr-4  "
                />
              </div>
              <button className=" h-10 bg-[#16A34A] rounded-lg mr-4 ml-4 ">
                Add
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
