"use client";

import { useState } from "react";
import { WhitePlusIcon } from "../svg/WhitePlus";
import { CloseIcon } from "../svg/Close";

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
          <div className="flex justify-center w-full h-[150px] gap-10 p-6">
            <div className=" flex flex-col gap-5">
              <div className="flex justify-between  w-[450px] ">
                <select className="select select-bordered w-[20%] h-[48px] rounded-[8px] bg-[#F3F4F6]">
                  <option className="text-[#94A3B8]">Choose</option>
                  <option>Casher</option>
                  <option>Casher1</option>
                </select>
                <p className="w-[70%] h-[48px] flex  items-center rounded-[8px] bg-[#F3F4F6]">
                  Name
                </p>
              </div>
              <button className="w-full h-10 bg-[#16A34A] rounded-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
