import { ProfileCard } from "@/ui/components/ProfileCard";
import { Navbar } from "@/ui/components/Navbar";
import { Projects } from "@/ui/components/Projects";
import { Footer } from "@/ui/components/Footer";
import Badge from "@/ui/components/Badge";

export default function Home() {
  return (
    <div className="px-5">
      <Navbar />
      <ProfileCard />
      <Projects />
      <Badge />
      <Footer />
    </div>
  );
}
