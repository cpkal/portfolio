export function ContactSection() {
	return (
		<div className="px-6 py-6 lg:px-24 lg:py-10" id="my-contact">
			<h3 className="text-5xl font-bold ">Contact Me</h3>
			<div className="block lg:flex  ">
      <form action="mailto:haikalg2003@gmail.com" method="post" encType="text/plain" className="py-4 relative w-full lg:w-4/5">
          <div className="mb-4">
              <input type="text" id="name" name="name" placeholder="Your Name" autoComplete="off" required className="w-full bg-secondary focus:outline-none p-2 rounded-lg p-2 rounded-lg" />
          </div>
          <div className="mb-4">
              <input type="email" id="email" name="email" placeholder="Your Email" autoComplete="off" required className="w-full bg-secondary focus:outline-none p-2 rounded-lg" />
          </div>
          <div className="mb-4">
              <textarea id="message" name="message" placeholder="Your Message" rows="4" autoComplete="off" required className="w-full bg-secondary focus:outline-none p-2 rounded-lg"></textarea>
          </div>
          <button type="submit" className="absolute right-0 p-2 bg-accent shadow-md focus:outline-none p-2 rounded-lg">
              Kirim pesan
          </button>
      </form>
      {/* emails and social medias */}
      <div className="w-full lg:w-1/5 ml-4">

          <div className="flex flex-col items-start gap-4">
              <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                  <div className="p-3 rounded-full border-2 border-slate-500 hover:bg-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" className="w-8 h-8" />
                  </div>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <div className="p-3 rounded-full border-2 border-slate-500 hover:bg-white">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="linkedin" className="w-8 h-8" />
                  </div>
              </a>
              <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                  <div className="p-3 rounded-full border-2 border-slate-500 hover:bg-white">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cmmOu4xUkNNZlk-qh4r47i9n6R1mLQD-3Q&s" alt="linkedin" className="w-8 h-8" />
                  </div>
              </a>
          </div>
        </div>
      </div>
	</div>
	)
}