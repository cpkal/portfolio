export function Navbar() {
	return(
		<div className="navbar sticky top-5 m-4 p-4 z-10 rounded-xl">
			<div className="container mx-auto flex justify-between items-center">
				<div className="md:flex space-x-6 mx-auto text-xl">
					<a href="#my-project" className="text-sm lg:text-lg font-bold">My Projects</a>
					<a href="#my-skill" className="text-sm lg:text-lg font-bold">My Skills</a>
					<a href="#my-contact" className="text-sm lg:text-lg font-bold">Contact Me</a>
				</div>
			</div>
		</div>
	);
}