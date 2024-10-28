import Home from "@/app/page";
import { EyeIcon } from "../svg/Eye";
import { LeftSideIcon, LeftSideicon } from "../svg/LeftSideIcon";
import { RightSideIcon } from "../svg/RightSideIcon";
import { AddButton } from "./AddButton";
import { Category } from "./AddCategory";
import { HomeIcon } from "../svg/Home";
import { FoodIcon } from "../svg/Food";

const Records = () => {
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
                    type="radio"
                    name="radio-1"
                    className="radio w-[15px] h-[15px]"
                    defaultChecked
                  />
                  <label htmlFor="radio">All</label>
                </div>
                <div className="flex gap-[15px] items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio w-[15px] h-[15px]"
                  />
                  <label htmlFor="radio">Income</label>
                </div>
                <div className="flex gap-[15px] items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio w-[15px] h-[15px]"
                  />
                  <label htmlFor="radio">Expense</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h1 className="text-[16px] font-[600] leading-6">Category</h1>
                <button className="text-gray-300 text-[16px] font-[400] leading-6">
                  Clear
                </button>
              </div>
              <div className="flex flex-col gap-[8px] pl-3">
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">
                    Food & Drinks
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">Shopping</p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">Housing</p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">
                    Transportation
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">Vehicle</p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">
                    Life & Entertainment
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">
                    Communication, PC
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">
                    Financial expenses
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">
                    Investments
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">Income</p>
                </div>
                <div className="flex gap-[10px]">
                  <EyeIcon />
                  <p className="text-[16px] font-[400] leading-6">Other</p>
                </div>
              </div>
            </div>
            <div>
              <Category />
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
                <div className="flex flex-col gap-3">
                  <h1 className="text-[16px] font-[600] leading-6 ">Today</h1>
                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <HomeIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Lending & Rent
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#84CC16] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>

                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <FoodIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Food & Drinks
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>

                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <FoodIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Food & Drinks
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>

                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <FoodIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Food & Drinks
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[16px] font-[600] leading-6 ">
                    Yesterday
                  </h1>
                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <FoodIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Food & Drinks
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>
                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <FoodIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Food & Drinks
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>
                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <FoodIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Food & Drinks
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>
                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <FoodIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Food & Drinks
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>

                  <div className="flex justify-between px-6 py-4 bg-white rounded-[12px]">
                    <div className="flex gap-4">
                      <FoodIcon />
                      <div className="flex flex-col gap">
                        <p className="text-[16px] font-[400] leading-6">
                          Food & Drinks
                        </p>
                        <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                          14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[red] text-[16px] font-[600] leading-6">
                      <p>+</p>
                      <p>1,000₮</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Records;
