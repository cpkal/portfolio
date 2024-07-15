import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="p-24">
        <h3 className="text-2xl"><span className="font-bold">Haikal is a</span> <span className="text-accent font-bold">Web Developer</span>.</h3>
        <br /> Experienced in building websites and web applications. 
        <br /> Passionate about web development and loves to learn new things.
      </div>
      <div className="navbar sticky top-0 p-3">
        <div class="container mx-auto flex justify-between items-center">
            <div class="hidden md:flex space-x-4 mx-auto text-xl">
                <a href="#my-project" className="text-sm">My Projects</a>
                <a href="#my-skill" className="text-sm">My Skills</a>
                <a href="#my-contact" className="text-sm">Contact Me</a>
            </div>
        </div>
      </div>
      <div className="px-6 py-6 lg:px-24 lg:py-12" id="my-project">
        <h3 className="text-3xl">My Projects</h3>
        <div class="max-w-screen mt-4">
          <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div class="bg-white shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400" alt="Card Image" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-2">Card Title 1</h2>
                    <p class="text-gray-600">This is a description for the first card. It provides some details about the content of the card.</p>
                    <a href="#" class="inline-block mt-4 text-blue-500 hover:underline">Read more</a>
                </div>
            </div>

            <div class="bg-white shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400" alt="Card Image" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-2">Card Title 2</h2>
                    <p class="text-gray-600">This is a description for the second card. It provides some details about the content of the card.</p>
                    <a href="#" class="inline-block mt-4 text-blue-500 hover:underline">Read more</a>
                </div>
            </div>

            <div class="bg-white shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400" alt="Card Image" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-2">Card Title 3</h2>
                    <p class="text-gray-600">This is a description for the third card. It provides some details about the content of the card.</p>
                    <a href="#" class="inline-block mt-4 text-blue-500 hover:underline">Read more</a>
                </div>
            </div>

            <div class="bg-white shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400" alt="Card Image" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-2">Card Title 3</h2>
                    <p class="text-gray-600">This is a description for the third card. It provides some details about the content of the card.</p>
                    <a href="#" class="inline-block mt-4 text-blue-500 hover:underline">Read more</a>
                </div>
            </div>
            
          </div>
        </div>


        <div className="py-12" id="my-skill">
          <h3 className="text-3xl">My Skills</h3>
          <div className="mt-4">
            {/* list of skills icon */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img src="https://camo.githubusercontent.com/2cb3af33f9a02e40c34a1a4e0c6d1309b4439faa6754212da968fcfc56afcb04/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a732c68746d6c2c6373732c7461696c77696e642c626f6f7473747261702c6e6f64656a732c72656163742c6e6578746a732c7376656c74652c6d7973716c2c7068702c6c61726176656c2c666c75747465722c646f636b65722c706f73746d616e" alt="HTML5" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-24" id="my-contact">
          <h3 className="text-3xl">Contact Me</h3>
          <form action="mailto:haikalg2003@gmail.com" method="post" enctype="text/plain" className="p-12">
              <div class="mb-4">
                  <label for="name" class="block text-sm font-semibold mb-2">Nama</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required class="w-full px-2 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div class="mb-4">
                  <label for="email" class="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required class="w-full px-2 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div class="mb-4">
                  <label for="message" class="block text-sm font-semibold mb-2">Pesan</label>
                  <textarea id="message" name="message" placeholder="Your Message" rows="4" required class="w-full px-2 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" class="w-full py-2 px-4 bg-accent text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Kirim pesan
              </button>
          </form>
        </div>
      </div>
    </main>
  );
}
