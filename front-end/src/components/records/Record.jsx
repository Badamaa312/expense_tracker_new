import { HomeIcon } from "../svg/Home";
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
import { TwoIcon } from "../svg/icons/2";
import { TwentyOneIcon } from "../svg/icons/21";
import { TwentyTwoIcon } from "../svg/icons/22";
import { TwentyThreeIcon } from "../svg/icons/23";
import { TwentyFourIcon } from "../svg/icons/24";
import { TwentyFiveIcon } from "../svg/icons/25";
import { TwentySixIcon } from "../svg/icons/26";
import { TwentySevenIcon } from "../svg/icons/27";
import { TwentyEightIcon } from "../svg/icons/28";
import { TwentyNineIcon } from "../svg/icons/29";
import { ThreeIcon } from "../svg/icons/3";
import { ThirtyIcon } from "../svg/icons/30";
import { FourIcon } from "../svg/icons/4";
import { FiveIcon } from "../svg/icons/5";
import { SixIcon } from "../svg/icons/6";
import { SevenIcon } from "../svg/icons/7";
import { EigthIcon } from "../svg/icons/8";
import { NineIcon } from "../svg/icons/9";

export const Record = ({ record, categories, setCategory }) => {
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

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white rounded-[12px">
      {categories.map((category, index) => {
        if (category.id === record.category_id)
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
                    {record?.name}
                  </p>
                  <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
                    {record?.date}
                  </p>
                </div>
              </div>
              <div
                className={`flex items-center justify-end gap-2 ${
                  record?.transaction_type == "INC"
                    ? "text-[#84CC16]"
                    : "text-[red]"
                }  text-[16px] font-[600] leading-6`}
              >
                <p className="flex justify-end">
                  {record.transaction_type == "INC" ? "+" : "-"}
                </p>
                <p className="flex justify-end number">{record?.amount}₮</p>
              </div>
            </div>
          );
      })}
    </div>
  );
};
