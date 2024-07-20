'use client'

import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";

export default function Home() {

  return (
    <main>
      <div className="p-16 lg:p-36">
        <h3 className="text-4xl"><span className="font-bold">Haikal is a</span> <span className="text-accent font-bold">Web Developer</span>.</h3>
        <br /> Experienced in building websites and web applications. 
        <br /> Passionate about web development and loves to learn new things.
      </div>
      
      <Navbar />
      
      <ProjectSection />

      <SkillSection />

      <ContactSection />
      {/* back to top */}
      <a href="#" className="fixed bottom-4 right-4 bg-accent text-white py-2 px-4 shadow-md hover:bg-blue-600">
        Back to Top
      </a>
    </main>
  );
}
