import DashboardForm from "@/sections/DashboardForm";
import ListOfProperties from "@/sections/ListOfProperties";
import MinimalCardIconSection from "@/sections/MinimalCardIconSection";

export default function Home() {
  return (
    <main className="  bg-gray-50 pt-10 px-3 md:px-10">
      <MinimalCardIconSection />
      <ListOfProperties />
      <DashboardForm/>
    </main>
  );
}
