import Index from "@/components/home";
import Project from "@/components/home/project";
import Skill from "@/components/home/skill";

export default function Home() {
  return (
    <>
      <Index />
      <main className="bg-gradient-to-b from-[#FFE8C8] to-[#FFFAE6]">
        <Project />
        <Skill />
      </main>
    </>
  );
}
