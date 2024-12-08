import { useState } from "react";
import Card from "@/components/Card";
import { imageList } from "@/db";
import Link from "next/link";
import { slugify } from "@/helpers/helper";


export function ProjectSection() {


  return (
    <div>
      <div className="px-6 py-6 lg:px-24 lg:py-10 " id="my-project">
      <h3 className="text-5xl font-bold">My Projects</h3>
      <p className="mt-4 text-white">
        Here are some of my projects that I have worked or currently working on. Click on the project to view more details.
      </p>
      <div className="max-w-screen mt-6">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* foreach imageList and combine it with card component */}
          {imageList.map((image, index) => (
            <Link href={`/project/${slugify(image.project_name)}`} key={index}>
              <Card key={index} project_name={image.project_name} thumbnail_url={image.thumbnail_url} />
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}