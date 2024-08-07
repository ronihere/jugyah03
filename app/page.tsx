
import DashboardForm from "@/sections/DashboardForm";
import GlossyCardSection from "@/sections/GlossyCardSection";
import ListOfProperties from "@/sections/ListOfProperties";
import MinimalCardIconSection from "@/sections/MinimalCardIconSection";
import TestimonialSection from "@/sections/Testimonial";


export default function Home() {
  return (
    <main className="">
      <div className="pt-10 px-3 md:px-10">
        <MinimalCardIconSection />
        <ListOfProperties />
        <GlossyCardSection />
        <DashboardForm />
      </div>
      <TestimonialSection />
    </main>
  );
}
