export function ContactSection() {
	return (
		<div className="px-6 py-6 lg:px-24 lg:py-16" id="my-contact">
			<h3 className="text-2xl font-bold">Contact Me</h3>
			<form action="mailto:haikalg2003@gmail.com" method="post" encType="text/plain" className="py-4 lg:w-4/5">
				<div className="mb-4">
						<label htmlFor="name" className="block text-sm mb-2">Nama</label>
						{/* make placeholder input text smaller */}
						
						<input type="text" id="name" name="name" placeholder="Your Name" required className="w-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</div>
				<div className="mb-4">
						<label htmlFor="email" className="block text-sm mb-2">Email</label>
						<input type="email" id="email" name="email" placeholder="Your Email" required className="w-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</div>
				<div className="mb-4">
						<label htmlFor="message" className="block text-sm mb-2">Pesan</label>
						<textarea id="message" name="message" placeholder="Your Message" rows="4" required className="w-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
				</div>
				<button type="submit" className="w-full py-2 px-4 btn-carousel text-white text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
						Kirim pesan
				</button>
		</form>
		</div>
	)
}