import { ProfileCard } from "@/ui/components/ProfileCard";
import { Navbar } from "@/ui/components/Navbar";
import { TechStack } from "@/ui/components/TechStack";
import { Projects } from "@/ui/components/Projects";
import { Services } from "@/ui/components/Services";
import { Experience } from "@/ui/components/Experience";
import { Education } from "@/ui/components/Education";
import { Footer } from "@/ui/components/Footer";
import Badge from "@/ui/components/Badge";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-6">
        <ProfileCard />
        <TechStack />
        <Projects />
        <Services />
        <Experience />
        <Education />
        <Badge />
        <Footer />
      </main>
    </>
  );
}
