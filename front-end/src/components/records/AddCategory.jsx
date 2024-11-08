"use client";

import { useEffect, useState } from "react";
import { WhitePlusIcon } from "../svg/WhitePlus";
import { CloseIcon } from "../svg/Close";
import { OneIcon } from "../svg/icons/1";
import { ArrowDropDown } from "../svg/ArrowDropDown";
import { TwoIcon } from "../svg/icons/2";
import { ThreeIcon } from "../svg/icons/3";
import { FourIcon } from "../svg/icons/4";
import { FiveIcon } from "../svg/icons/5";
import { SixIcon } from "../svg/icons/6";
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
import { BACKEND_ENDPOINT } from "../constant/constant";

export const AddCategory = () => {
  const [categoryColor, setCategoryColor] = useState("#F3F4F6");
  const [categoryIcon, setCategoryIcon] = useState("HomeIcon");
  const [categoryName, setCategoryName] = useState("");

  const handleColor = (color) => {
    return setCategoryColor(color);
  };

  const handleIcon = (iconName) => {
    return setCategoryIcon(iconName);
  };

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };

  // const onFocus =(event)=>{
  //   setCategoryIcon(event.target.value)
  // }

  const addCategory = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ categoryName, categoryIcon, categoryColor }),
      };

      const response = await fetch(`${BACKEND_ENDPOINT}/category`, options);
      const data = await response.json();

      setCategoryName((prevCats) => [...prevCats, data]);
      setCategoryColor("#F3F4F6");
      setCategoryIcon("HomeIcon");
    } catch (error) {
      console.log("Category added error");
    }
    document.getElementById("my_modal_2").close();
  };

  const colors = [
    { id: 1, color: "#0166FF" },
    { id: 2, color: "#01B3FF" },
    { id: 3, color: "#41CC00" },
    { id: 4, color: "#F9D100" },
    { id: 5, color: "#FF7B01" },
    { id: 6, color: "#AE01FF" },
    { id: 7, color: "#FF0101" },
  ];

  const icons = [
    { name: "HomeIcon", icon: <OneIcon /> },
    { name: "SecondIcon", icon: <TwoIcon /> },
    { name: "ThirdIcon", icon: <ThreeIcon /> },
    { name: "FourthIcon", icon: <FourIcon /> },
    { name: "FifthIcon", icon: <FiveIcon /> },
    { name: "Sixthcon", icon: <SixIcon /> },
    { name: "SeventhIcon", icon: <SevenIcon /> },
    { name: "EightIcon", icon: <EigthIcon /> },
    { name: "NinethIcon", icon: <NineIcon /> },
    { name: "TenthIcon", icon: <TenthIcon /> },
    { name: "EleventhIcon", icon: <EleventhIcon /> },
    { name: "TwelfthIcon", icon: <TwelweIcon /> },
    { name: "ThirteenthIcon", icon: <ThirteenIcon /> },
    { name: "Fourteenth", icon: <FourteenIcon /> },
    { name: "FifteenthIcon", icon: <FifteenIcon /> },
    { name: "SixteenthIcon", icon: <SixteenIcon /> },
    { name: "SeventeenthIcon", icon: <SeventeenIcon /> },
    { name: "EighteenthIcon", icon: <EighteenIcon /> },
    { name: "NineteenthIcon", icon: <NineteenIcon /> },
    { name: "TwentiethIcon", icon: <TwentyIcon /> },
    { name: "TwentyFirstIcon", icon: <TwentyOneIcon /> },
    { name: "TwentySecondIcon", icon: <TwentyTwoIcon /> },
    { name: "TwentyThirdIcon", icon: <TwentyThreeIcon /> },
    { name: "TwentyFourthIcon", icon: <TwentyFourIcon /> },
    { name: "TwentyFifthIcon", icon: <TwentyFiveIcon /> },
    { name: "TwentySixthIcon", icon: <TwentySixIcon /> },
    { name: "TwentySeventhIcon", icon: <TwentySevenIcon /> },
    { name: "TwentyEighticon", icon: <TwentyEightIcon /> },
    { name: "TwentyNinethIcon", icon: <TwentyNineIcon /> },
    { name: "ThirtiethIcon", icon: <ThirtyIcon /> },
  ];

  const defaultIcon = icons?.find((icon) => icon?.name === categoryIcon);

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
          <div className="py-[24px] px-[20px] flex flex-col gap-4">
            <div className="flex justify-between w-[420px] items-center">
              <details className="dropdown">
                <summary
                  style={{ backgroundColor: categoryColor }}
                  className={`btn m-1 flex flex-col`}
                >
                  {defaultIcon?.icon}
                  <ArrowDropDown />
                </summary>
                <ul
                  id="unordered_list"
                  className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[320px] p-2 shadow"
                >
                  <li className="grid grid-cols-6 grid-rows-5 w-[300px]">
                    {icons.map((icon, index) => {
                      return (
                        <button
                          onClick={() => {
                            handleIcon(icon?.name);
                          }}
                          key={index}
                        >
                          {icon.icon}
                        </button>
                      );
                    })}
                  </li>
                  <div className="flex justify-between items-center mt-4">
                    {colors.map((color) => (
                      <button
                        onClick={() => {
                          handleColor(color?.color);
                        }}
                        key={color.id}
                        style={{ backgroundColor: color.color }}
                        className={`w-8 h-8 rounded-full`}
                      ></button>
                    ))}
                  </div>
                </ul>
              </details>
              <input
                onChange={handleInputChange}
                // onFocus={}
                type="text"
                placeholder="Name"
                className="input input-bordered w-[350px] bg-[#F3F4F6]"
              />
            </div>
            <button
              onClick={addCategory}
              className="w-ful bg-[#16A34A] text-white rounded-[24px] py-[10px]"
            >
              Add
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
