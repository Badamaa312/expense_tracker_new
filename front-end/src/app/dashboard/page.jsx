import DashBoard from "@/components/dashboard/DashBoard";
import { LastRecords } from "@/components/dashboard/LastRecords";
import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center">
        <Header />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-gray-50 gap-10">
        <DashBoard />
        <LastRecords />
      </div>
    </main>
  );
}
