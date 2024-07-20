export function Navbar() {
	return(
		<div className="navbar sticky top-0 p-4 z-10">
			<div className="container mx-auto flex justify-between items-center">
				<div className="md:flex space-x-4 mx-auto text-xl">
					<a href="#my-project" className="text-sm font-bold">My Projects</a>
					<a href="#my-skill" className="text-sm font-bold">My Skills</a>
					<a href="#my-contact" className="text-sm font-bold">Contact Me</a>
				</div>
			</div>
		</div>
	);
}