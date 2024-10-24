"use client";

import { useState } from "react";
import { WhitePlusIcon } from "./svg/WhitePlus";

export const AddRecord = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [isColor, setIsColor] = useState(true);

  const ChangeBgColor = () => {
    setIsClicked(!isClicked);
    setIsColor(!isColor);
  };
  return (
    <div>
      <button
        className="h-8 w-[99px] bg-[#0166FF] flex items-center justify-center rounded-[20px] gap-1"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        {" "}
        <WhitePlusIcon />
        <p className="text-[14px] leading-4 font-[400] text-[white]">Record</p>
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="bg-white rounded-xl p-0 w-[792px]">
          <div className="w-[792px] flex items-center justify-between h-[50px] border-b border-b-[#E2E8F0] py-[24px] px-[30px]">
            <h3 className="text-[20px] leading-7 font-[600]">Add record</h3>
            <form
              method="dialog"
              className="flex justify-between items-center "
            >
              <button className=" top-1">✕</button>
            </form>
          </div>
          <div className="flex justify-center w-[792px]">
            <div className="w-[50%] flex flex-col gap-[20px] px-[20px] py-[24px]">
              <div className="flex justify-between  w-[348px] rounded-[20px] bg-[#F3F4F6]">
                <button
                  onClick={ChangeBgColor}
                  className={`w-[172px] h-[40px] py-[12px] ${
                    isClicked
                      ? "bg-[#0166FF] text-white rounded-[20px]"
                      : "bg-[#F3F4F6] text-black rounded-r-[20px]"
                  } rounded-l-[20px] flex items-center justify-center`}
                >
                  Expense
                </button>
                <button
                  onClick={ChangeBgColor}
                  className={`w-[172px] h-[40px] py-[12px] ${
                    isClicked
                      ? "bg-[#F3F4F6] text-black rounded-r-[20px]"
                      : "bg-[#16A34A] text-white rounded-[20px]"
                  }  flex items-center justify-center`}
                >
                  Income
                </button>
              </div>
              <div className="flex flex-col gap-[24px] w-[348px]">
                <div className="w-full h-[76px] px-4 py-3 bg-[#F3F4F6] rounded-[8px] border border-[#D1D5DB]">
                  <p className="text-[16px] font-[400] leading-6">Amount</p>
                  <input
                    placeholder="₮ 000.00"
                    type="text"
                    className="bg-[#F3F4F6]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-[400] leading-6">Category</p>
                  <select className="select select-bordered w-full h-[48px] rounded-[8px] bg-[#F3F4F6]">
                    <option className="text-[#94A3B8]">Choose</option>
                    <option>Casher</option>
                    <option>Casher1</option>
                  </select>
                </div>
                <div className="flex  justify-between">
                  <div className="flex flex-col gap-1 w-[168px]">
                    <p className="text-[16px] font-[400] leading-6">Date</p>
                    <input
                      className="bg-[#F3F4F6] rounded-[8px] border border-[#D1D5DB] p-[8px]"
                      type="date"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-[168px]">
                    <p className="text-[16px] font-[400] leading-6">Time</p>
                    <input
                      className="bg-[#F3F4F6] rounded-[8px] border border-[#D1D5DB] p-[8px]"
                      type="time"
                    />
                  </div>
                </div>
                <button
                  className={`w-full rounded-[20px] flex justify-center items-center text-white py-[12px] ${
                    isColor ? "bg-[#0166FF]" : "bg-[#16A34A]"
                  }`}
                >
                  Add record
                </button>
              </div>
            </div>

            <div className="w-[50%] px-[20px] py-[24px] flex flex-col gap-[20px]">
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-[400] leading-6">Payee</p>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full input input-bordered bg-[#F3F4F6]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-[400] leading-6">Note</p>
                <textarea
                  type="text"
                  placeholder="Write here"
                  className="w-full h-[280px] input input-bordered bg-[#F3F4F6] pt-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
