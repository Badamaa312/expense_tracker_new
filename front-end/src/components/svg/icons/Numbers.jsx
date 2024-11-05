import { OneIcon } from "./1";
import { TwoIcon } from "./2";

export const Numbers = () => {
  return (
    <main className="w-[312px] h-[312px]">
      <div className=" w-[312px] modal-box flex flex-col gap-6">
        <div className="grid grid-cols-6 grid-rows-5 gap-6 ">
          <OneIcon />
          <TwoIcon />
        </div>
      </div>
    </main>
  );
};
