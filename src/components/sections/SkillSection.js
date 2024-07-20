export function SkillSection() {
	return (
		<div className="px-6 py-10 lg:px-24 lg:py-10 bg-secondary text-white" id="my-skill">
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
	)
}