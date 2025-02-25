'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Project } from "../data/projects";

export default function ProjectDisplay({ project }: { project: Project }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [project.imageUrl, ...(project.screenshots || [])];

  return (
    <>
      <div className="container mx-auto px-4">
        <Link
          href="/#projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </Link>

        <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div 
            className="relative w-full cursor-pointer group" 
            style={{ aspectRatio: '16/7' }}
            onClick={() => {
              setLightboxIndex(0);
              setIsLightboxOpen(true);
            }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>

          <div className="p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 text-sm rounded-full font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose dark:prose-invert max-w-none mb-10">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => {
                    setLightboxIndex(index + 1);
                    setIsLightboxOpen(true);
                  }}
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={lightboxIndex}
        slides={allImages.map(src => ({ src }))}
        carousel={{ finite: allImages.length <= 1 }}
      />
    </>
  );
}
