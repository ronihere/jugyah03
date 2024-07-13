
import DashboardForm from "@/sections/DashboardForm";
import GlossyCardSection from "@/sections/GlossyCardSection";
import ListOfProperties from "@/sections/ListOfProperties";
import MinimalCardIconSection from "@/sections/MinimalCardIconSection";


export default function Home() {
  return (
    <main className="  bg-gray-50 pt-10 px-3 md:px-10">
      <MinimalCardIconSection />
      <ListOfProperties />
      <GlossyCardSection/>
      <DashboardForm />
      
    </main>
  );
}
