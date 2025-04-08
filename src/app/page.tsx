import { ProfileCard } from "@/ui/components/ProfileCard";
import { Navbar } from "@/ui/components/Navbar";

export default function Home() {
  return (
    <div className="px-5">
      <Navbar />
      <ProfileCard />
    </div>
  );
}
