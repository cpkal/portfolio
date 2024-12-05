import { useState } from "react";
import Card from "@/components/Card";
import { imageList } from "@/db";


export function ProjectSection() {
  const [selectImage, setSelectImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const [selectProjectImage, setSelectProjectImage] = useState(0);
  

  const handleSelectImage = (index) => {
    setSelectImage(index);
    setShowGallery(true);
    setSelectProjectImage(0);
  }

  return (
    <div>
      <div className="px-6 py-6 lg:px-24 lg:py-10 " id="my-project">
      <h3 className="text-5xl font-bold">My Projects</h3>
      <div className="max-w-screen mt-6">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* foreach imageList and combine it with card component */}
          {imageList.map((image, index) => (
            <Card key={index} project_name={image.project_name} thumbnail_url={image.thumbnail_url} onClick={() => handleSelectImage(index)} />
          ))}
        </div>
      </div>
    </div>

     {showGallery && (
      // create carousel with imageList[selectImage].project_images
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 ">
        {/* create close button */}
        <button className="absolute top-4 right-4 text-white" onClick={() => setShowGallery(false)}>
          <i className="fas fa-times"></i>X
        </button>
        <div className="bg-primary p-8 h-full w-full">
          <h2 className="text-3xl font-bold mb-2">{imageList[selectImage].project_name}</h2>
        
          {/* create description of the project */}
          <p className="text-lg mt-3 font-bold">Technology: 
            {imageList[selectImage].technologies.map((tech, index) => (
              <span key={index} className="bg-accent text-white px-2 py-1 rounded-lg ml-2">{tech}</span>
            ))}
          </p>
          <p className="text-lg font-bold">Description</p>
          <p className="text-sm">{imageList[selectImage].description}</p>
        </div>
      </div>
    )}
    </div>
  );
}