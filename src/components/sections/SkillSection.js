import Image from "next/image"
import { skillList } from "@/db"

export function SkillSection() {
	return (
		<div className="p-10 bg-secondary text-white" id="my-skill">
			<h3 className="text-4xl font-bold">My Skills</h3>
			<div className="mt-4">
				{/* list of skills icon */}
				<div className="">
					<div>
						<h2 className="text-xl ">These skills are mainly used in my projects</h2>
					</div>
					<div className="block lg:flex justify-around items-center mt-4">
						{skillList.map((skill, index) => (
							<div key={index} className="flex flex-col items-center justify-between mt-6 lg:mt-0">
								<Image src={skill.skill_url} alt={skill.skill_name} width={100} height={100} />
								<p className="mt-2">{skill.skill_name}</p>
							</div>
							)
						)}
					</div>
					
				</div>
			</div>
		</div>
	)
}