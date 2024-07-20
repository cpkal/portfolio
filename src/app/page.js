'use client'

import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";

export default function Home() {

  return (
    <main>
      <div className="p-16 lg:p-36">
        <h3 className="text-2xl lg:text-4xl"><span className="font-bold">Haikal Putra Gustiansyah <span className="hidden lg:inline">|</span> <br  className="block lg:hidden"/> </span> <span className="text-accent font-bold">Web Developer</span>.</h3>
        <br /> <p className="hidden lg:inline">Experienced in building websites and web applications. <br /> Passionate about web development and loves to learn new things.</p>
      </div>
      
      <Navbar />
      
      <ProjectSection />

      <SkillSection />

      <ContactSection />
      {/* back to top */}
      <a href="#" className="text-sm hidden lg:block fixed bottom-4 right-4 bg-accent text-white py-2 px-4 shadow-md">
        Back to Top
      </a>
    </main>
  );
}
