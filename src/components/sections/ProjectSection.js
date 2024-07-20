import { useState } from "react";
import Card from "@/components/Card";
import { imageList } from "@/db";


export function ProjectSection() {
  const [selectImage, setSelectImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const [selectProjectImage, setSelectProjectImage] = useState(0);
  

  const handleSelectImage = (index) => {
    console.log(index);
    setSelectImage(index);
    setShowGallery(true);
    setSelectProjectImage(0);
  }

  return (
    <div>
      <div className="px-6 py-6 lg:px-24 lg:py-10" id="my-project">
      <h3 className="text-2xl font-bold">My Projects</h3>
      <div className="max-w-screen mt-4">
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
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        {/* create close button */}
        <button className="absolute top-4 right-4 text-white" onClick={() => setShowGallery(false)}>
          <i className="fas fa-times"></i>X
        </button>
        <div className="bg-white p-4">
          <h2 className="text-md font-medium mb-2">{imageList[selectImage].project_name}</h2>
          {/* make image carousel */}
          <div className="flex justify-between items-center relative">
            <button className="btn-carousel absolute ml-2" onClick={() => setSelectProjectImage(selectProjectImage - 1)} disabled={selectProjectImage === 0}>&lt;</button>

            {imageList[selectImage].project_images.map((image, index) => (
              // hidden if index !== selectProjectImage
              // add transition on the image
              <img key={index} src={image} alt="Project Image" className={`w-full object-cover ${index !== selectProjectImage ? "hidden" : ""}`} />
            ))}

            <button className="btn-carousel absolute mr-2 right-0" onClick={() => setSelectProjectImage(selectProjectImage + 1)} disabled={selectProjectImage === imageList.length - 1}>&gt;</button>
          </div>
          
          {/* create description of the project */}
          <p className="text-sm mt-3">Framework: Laravel & Bootstrap 5</p>
        </div>
      </div>
    )}
    </div>
  );
}