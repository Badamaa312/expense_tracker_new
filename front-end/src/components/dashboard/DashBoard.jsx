import { DecreaseIcon } from "../svg/Decrease";
import { IncreaseIcon } from "../svg/Increase";
import { WhiteLogo } from "../svg/WhiteLogo";

const DashBoard = () => {
  return (
    <div className="container flex justify-between mt-[40px]">
      <div
        style={{
          backgroundImage: `url(bgcard.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[384px] h-[216px] bg-[#0166FF]  rounded-[18px] flex "
      >
        <div className="mt-8 ml-8">
          <WhiteLogo />
          <div className="mt-[66px]">
            <p className="primary-text">Cash</p>
            <p className="text-white text-[24px] font-[600] leading-8">
              10,000,000₮
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl flex flex-col w-[384px] h-[216px] bg-white">
        <div className="flex gap-[8px] items-center px-6 py-4">
          <p className="w-[8px] h-[8px] bg-[#84CC16] rounded-[50%]"></p>
          <p className="tex-[16px] leading-[24px] font-[600] text-[#0F172A]">
            Your income
          </p>
        </div>
        <div className="px-6 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-black text-[36px] font-[600] leading-10">
              1,200,000₮
            </p>
            <p className="text-[#64748B] text-[18px] font-[400] leading-7">
              Your income Amount
            </p>
          </div>
          <div className="flex gap-2">
            <IncreaseIcon />
            <p className="text-black text-[18px] font-[400] leading-7">
              32% from last month
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl flex flex-col w-[384px] h-[216px] bg-white">
        <div className="flex gap-[8px] items-center px-6 py-4">
          <p className="w-[8px] h-[8px] bg-[#0166FF] rounded-[50%]"></p>
          <p className="tex-[16px] leading-[24px] font-[600] text-[#0F172A]">
            Your income
          </p>
        </div>
        <div className="px-6 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex gap-3">
              <p className="text-black text-[36px] font-[600] leading-10">-</p>
              <p className="text-black text-[36px] font-[600] leading-10">
                1,200,000₮
              </p>
            </div>

            <p className="text-[#64748B] text-[18px] font-[400] leading-7">
              Your expence Amount
            </p>
          </div>
          <div className="flex gap-2">
            <DecreaseIcon />
            <p className="text-black text-[18px] font-[400] leading-7">
              32% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
