import Header from "@/components/Header";
import Records from "@/components/records/Records";

export default function RecordsPage() {
  return (
    <main>
      <div className="">
        <Header />
      </div>
      <div className="w-full h-screen flex bg-gray-50  gap-10">
        <Records />
      </div>
    </main>
  );
}
