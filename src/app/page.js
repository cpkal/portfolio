'use client'

import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";
import Typewriter from 'typewriter-effect';

export default function Home() {

  return (
    <main>
      <div className="p-16 lg:p-36">
        <h3 className="mb-2 text-3xl lg:text-6xl"><span className="font-bold">Haikal Putra Gustiansyah</span>  </h3>

        
        <Typewriter
          options={{
            strings: ['Fullstack Developer', 'Flutter Developer', 'Competitive Programmer'],
            autoStart: true,
            loop: true,
            wrapperClassName: 'text-2xl lg:text-4xl font-bold text-accent',
          }}
          
        />
        <br />
        <p className=" hidden lg:inline">Experienced in building websites and mobile apps. <br /> Loves to learn new things.</p>
      </div>
      
      <Navbar />
      
      <ProjectSection />

      <SkillSection />

      <ContactSection />
      {/* back to top */}
      <a href="#" className="text-sm hidden lg:block fixed bottom-4 right-4 bg-accent text-white py-2 px-4 shadow-md rounded-lg">
        Back to Top
      </a>
    </main>
  );
}
