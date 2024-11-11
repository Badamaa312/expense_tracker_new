"use client";

import { EyeIcon } from "../svg/Eye";
import { LeftSideIcon } from "../svg/LeftSideIcon";
import { RightSideIcon } from "../svg/RightSideIcon";
import { AddButton } from "./AddButton";
import { AddCategory, Category } from "./AddCategory";
import { useEffect, useState } from "react";
import { BACKEND_ENDPOINT } from "../constant/constant";
import { NoEye } from "../svg/NoEye";
import { HomeIcon } from "../svg/Home";
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
import { SixteenIcon } from "../svg/icons/16";
import { SeventeenIcon } from "../svg/icons/17";
import { EighteenIcon } from "../svg/icons/18";
import { NineteenIcon } from "../svg/icons/19";
import { TwentyOneIcon } from "../svg/icons/21";
import { TwentyTwoIcon } from "../svg/icons/22";
import { TwentyThreeIcon } from "../svg/icons/23";
import { TwentyFourIcon } from "../svg/icons/24";
import { TwentyFiveIcon } from "../svg/icons/25";
import { TwentySixIcon } from "../svg/icons/26";
import { TwentySevenIcon } from "../svg/icons/27";
import { TwentyEightIcon } from "../svg/icons/28";
import { TwentyNineIcon } from "../svg/icons/29";
import { ThirtyIcon } from "../svg/icons/30";
import { FifteenIcon } from "../svg/icons/15";

const Records = () => {
  const [categories, setCategory] = useState([]);
  const [clickedCategoryName, setClickedCategoryName] = useState("");
  const [isClicked, setIsClicked] = useState(true);
  const [records, setRecords] = useState([]);
  const [transactionType, setTransactionType] = useState("ALL");

  let filteredCategories = [];
  if (!clickedCategoryName) {
    filteredCategories = categories;
  } else {
    filteredCategories = categories?.filter(
      (category) => category?.name === clickedCategoryName
    );
  }

  const icons = {
    HomeIcon: <HomeIcon />,
    SecondIcon: <TwoIcon />,
    ThirdIcon: <ThreeIcon />,
    FourthIcon: <FourIcon />,
    FifthIcon: <FiveIcon />,
    Sixthcon: <SixIcon />,
    SeventhIcon: <SevenIcon />,
    EightIcon: <EigthIcon />,
    NinethIcon: <NineIcon />,
    TenthIcon: <TenthIcon />,
    EleventhIcon: <EleventhIcon />,
    TwelfthIcon: <TwelweIcon />,
    ThirteenthIcon: <ThirteenIcon />,
    Fourteenth: <FourteenIcon />,
    FifteenthIcon: <FifteenIcon />,
    SixteenthIcon: <SixteenIcon />,
    SeventeenthIcon: <SeventeenIcon />,
    EighteenthIcon: <EighteenIcon />,
    NineteenthIcon: <NineteenIcon />,
    TwentiethIcon: <TwelweIcon />,
    TwentyFirstIcon: <TwentyOneIcon />,
    TwentySecondIcon: <TwentyTwoIcon />,
    TwentyThirdIcon: <TwentyThreeIcon />,
    TwentyFourthIcon: <TwentyFourIcon />,
    TwentyFifthIcon: <TwentyFiveIcon />,
    TwentySixthIcon: <TwentySixIcon />,
    TwentySeventhIcon: <TwentySevenIcon />,
    TwentyEighticon: <TwentyEightIcon />,
    TwentyNinethIcon: <TwentyNineIcon />,
    ThirtiethIcon: <ThirtyIcon />,
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/category`);
      const data = await response.json();
      setCategory(data?.data);
      console.log(data.data);
    } catch (error) {
      console.log("Category error", error);
    }
  };

  const fetchRecords = async () => {
    try {
      const response = await fetch(
        `${BACKEND_ENDPOINT}/transaction?transactionType=${transactionType}`
      );
      const data = await response.json();
      setRecords(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const transactType = (value) => {
    setTransactionType(value);
  };
  const handleIcon = (name) => {
    setClickedCategoryName(name, !isClicked);
  };
  const handleClearButton = () => {
    setClickedCategoryName(!isClicked);
    setClickedCategoryName("");
  };

  useEffect(() => {
    fetchCategories();
    fetchRecords();
  }, [transactionType]);

  return (
    <main className="w-full flex justify-center mt-10">
      <div className="container flex  gap-10">
        <div className="rounded-xl flex flex-col w-[30%] h-[912px]  bg-white">
          <div className="flex flex-col gap-6 px-6 py-4">
            <p className="text-[24px] leading-[24px] font-[600] text-[#0F172A]">
              Records
            </p>
            <AddButton />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 border-2 border-gray-50 rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-[16px] font-[600] leading-6 ">Types</h1>
              <div className="flex flex-col gap-1 ml-[20px]">
                <div className="flex gap-[15px] items-center">
                  <input
                    onClick={() => transactType("All")}
                    type="radio"
                    name="radio-1"
                    className="radio w-[15px] h-[15px]"
                    defaultChecked
                  />
                  <label htmlFor="radio">All</label>
                </div>
                <div className="flex gap-[15px] items-center">
                  <input
                    onClick={() => transactType("INC")}
                    type="radio"
                    name="radio-1"
                    className="radio w-[15px] h-[15px]"
                  />
                  <label htmlFor="radio">Income</label>
                </div>
                <div className="flex gap-[15px] items-center">
                  <input
                    onClick={() => transactType("EXP")}
                    type="radio"
                    name="radio-1"
                    className="radio w-[15px] h-[15px]"
                  />
                  <label htmlFor="radio">Expense</label>
                </div>
              </div>
            </div>
            {/* // Category input side */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h1 className="text-[16px] font-[600] leading-6">Category</h1>
                <button
                  onClick={handleClearButton}
                  className=" text-[16px] text-gray-500 font-[400] leading-6"
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-col gap-[8px] pl-3">
                <div className="text-[16px] font-[400] leading-6">
                  {categories.map((category, index) => {
                    return (
                      <div key={index} className="flex gap-[10px] items-center">
                        {clickedCategoryName === category.name ? (
                          <EyeIcon />
                        ) : (
                          <NoEye />
                        )}
                        <button
                          onClick={() => handleIcon(category?.name)}
                          className="text-[px] font-[400] leading-6"
                        >
                          {category?.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <AddCategory />
            </div>
          </div>
        </div>
        <div className="rounded-xl flex flex-col w-[70%] h-[416px] bg-gray-50 gap-6">
          <div className="flex gap-[8px] items-center px-6 py-4">
            <div className="w-full flex flex-col gap-4 mt-8">
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <LeftSideIcon />
                  <p className="text-[16px] font-[400] leading-6">
                    Last 30 Days
                  </p>
                  <RightSideIcon />
                </div>
                <select className="select select-bordered w-[180px] h-[48px] rounded-lg text-[16px] leading-6 font-[600]">
                  <option>Newest first</option>
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-[16px] font-[600] leading-6 ">Today</h1>
                {filteredCategories?.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between px-6 py-4 bg-white rounded-[12px]"
                    >
                      <div className="flex gap-4">
                        <div
                          className="rounded-full w-10 h-10 flex justify-center items-center"
                          style={{
                            backgroundColor: category.icon_color,
                          }}
                        >
                          {icons[category?.category_icon]}
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center">
                          <p className="text-[16px] font-[400] leading-6">
                            {category?.name}
                          </p>
                          <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                            {category?.date}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          category?.transaction_type == "INC"
                            ? "text-[#84CC16]"
                            : "text-[red]"
                        }  text-[16px] font-[600] leading-6`}
                      >
                        <p>{category.transaction_type == "INC" ? "+" : "-"}</p>
                        <p className="number">{category?.amount}₮</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Records;
