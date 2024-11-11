import { LoadingIcon } from "./svg/LoadingIcon";
import { LogoIconLoading } from "./svg/LogoIconLoading";

export const Loading = () => {
  return (
    <div className="h-[1200px] flex flex-col gap-12 justify-center items-center">
      <LogoIconLoading />
      <div className="flex flex-col gap-4 justify-center items-center">
        <LoadingIcon />
        <p className="text-4 leading-6 font-[600]">Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
};
