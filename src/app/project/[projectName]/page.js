import { imageList } from "@/db";
import { slugify } from "@/helpers/helper";

export default async function Page({ params }) {
    const projectName = params.projectName; 
    const currentProject = imageList.find(
        (image) => slugify(image.project_name) === projectName
    );

    if (!currentProject) {
        return (
            // center project not found message
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl">Project not found</h1>
            </div>
        )
    }

    return (
        <div className="p-8 block lg:flex items-start">
            
            <div className="w-full lg:w-1/2">
                <div className="flex items-center">
                    <h1 className="text-5xl font-bold">{currentProject.project_name}</h1>
                    {/* badge */}
                    {currentProject.is_personal_project && (
                        <span className="bg-green-500 text-white px-2 py-1 ml-2 rounded-full">Personal</span>
                    )}

                    {/* badge */}
                    {!currentProject.is_personal_project && (
                        <span className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full">Client</span>
                    )}
                </div>

                <p className="mt-2">{currentProject.description}</p>
                <div className="mt-4">
                    <h2 className="text-2xl font-medium mb-2">Technologies</h2>
                   
                        {currentProject.technologies.map((tech, index) => (
                            // badge
                            <span key={index} className="bg-secondary text-whte px-2 py-1 mr-2 rounded-full">{tech}</span>
                        ))}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 lg:mt-0 lg:p-4 w-full lg:w-1/2">
                {currentProject.project_images.map((image, index) => (
                    <div
                    key={index}
                    className={`overflow-hidden rounded-lg shadow-lg ${
                        index % 7 === 0
                        ? 'col-span-2 row-span-2'
                        : index % 5 === 0
                        ? 'row-span-2'
                        : 'col-span-1'
                    }`}
                    >
                    <img 
                        src={image} 
                        alt={currentProject.project_name} 
                        className="object-cover w-full h-full"
                    />
                    </div>
                ))}
            </div>
            
        </div>
    )
}
