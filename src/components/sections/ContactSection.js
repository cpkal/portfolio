export function ContactSection() {
	return (
		<div className="px-6 py-6 lg:px-24 lg:py-10" id="my-contact">
			<h3 className="text-5xl font-bold ">Contact Me</h3>
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
	</div>
	)
}