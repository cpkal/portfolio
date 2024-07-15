import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="p-16 lg:p-36">
        <h3 className="text-4xl"><span className="font-bold">Haikal is a</span> <span className="text-accent font-bold">Web Developer</span>.</h3>
        <br /> Experienced in building websites and web applications. 
        <br /> Passionate about web development and loves to learn new things.
      </div>
      <div className="navbar sticky top-0 p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
            <div className="hidden md:flex space-x-4 mx-auto text-xl">
                <a href="#my-project" className="text-sm">My Projects</a>
                <a href="#my-skill" className="text-sm">My Skills</a>
                <a href="#my-contact" className="text-sm">Contact Me</a>
            </div>
        </div>
      </div>
      <div className="px-6 py-6 lg:px-24 lg:py-16" id="my-project">
        <h3 className="text-2xl font-bold">My Projects</h3>
        <div className="max-w-screen mt-4">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            
            <Card project_name="Hava.id" />
            <Card project_name="Hava.id" />
            <Card project_name="Hava.id" />
            <Card project_name="Hava.id" />
            <Card project_name="Hava.id" />
            <Card project_name="Hava.id" />
            <Card project_name="Hava.id" />
            <Card project_name="Hava.id" />
            
          </div>
        </div>
      </div>
      <div className="px-6 py-6 lg:px-24 lg:py-20 bg-primary text-white" id="my-skill">
        <h3 className="text-2xl font-bold">My Skills</h3>
        <div className="mt-4">
          {/* list of skills icon */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="https://camo.githubusercontent.com/2cb3af33f9a02e40c34a1a4e0c6d1309b4439faa6754212da968fcfc56afcb04/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a732c68746d6c2c6373732c7461696c77696e642c626f6f7473747261702c6e6f64656a732c72656163742c6e6578746a732c7376656c74652c6d7973716c2c7068702c6c61726176656c2c666c75747465722c646f636b65722c706f73746d616e" alt="HTML5" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 lg:px-24 lg:py-16" id="my-contact">
        <h3 className="text-2xl font-bold">Contact Me</h3>
        <div className="lg:flex">
          <form action="mailto:haikalg2003@gmail.com" method="post" enctype="text/plain" className="p-12 lg:w-4/5">
              <div className="mb-4">
                  <label for="name" className="block text-sm font-semibold mb-2">Nama</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full px-2 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                  <label for="email" className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full px-2 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                  <label for="message" className="block text-sm font-semibold mb-2">Pesan</label>
                  <textarea id="message" name="message" placeholder="Your Message" rows="4" required className="w-full px-2 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-accent text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Kirim pesan
              </button>
          </form>
          <div>
            {/* list of links to my social media */}
            <div className="flex items-center space-x-4 lg:w-1/5">
              <a href="https://www.linkedin.com/in/haikalg" target="_blank" className="text-xl text-accent">
                <i className="fab fa-linkedin"></i>
              </a>  
              <a href="https://www.github.com/haikalg" target="_blank" className="text-xl text-accent">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/haikalg" target="_blank" className="text-xl text-accent">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
