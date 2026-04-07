"use client";

import useProjects from "@/hooks/useProjects";
import { fetchProjectsData } from "@/redux/thunks/projectsThunk";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProjectLinks from "@/components/projects/projectLinks";
import ProjectTechs from "@/components/projects/projectTechs";
import LoadingContainer from "@/components/loader/loading";

const Projects = () => {
  const dispatch = useDispatch();
  const { loading, projectsData } = useProjects();
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    setIsClient(true);
    if (!projectsData || projectsData.length === 0) {
      dispatch(fetchProjectsData());
    }
  }, [dispatch, projectsData]);

  if (!isClient) return null;

  const sortedProjects = [...projectsData].sort((a, b) => b.date - a.date);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {loading && <LoadingContainer />}
      
      <div className="section-container">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-gradient">Featured Projects</span>
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-muted max-w-2xl mx-auto text-lg">
            A collection of my recent work, ranging from web applications to research papers and machine learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in">
          {currentProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="group relative glass rounded-3xl overflow-hidden hover:bg-foreground/5 transition-all duration-500 hover:-translate-y-2 border border-foreground/10 hover:border-accent/30 flex flex-col"
              >
                {/* Status Ribbon */}
                <div className="absolute top-0 right-0 z-10">
                  <div className={`px-10 py-1 translate-x-8 translate-y-4 rotate-45 text-[10px] font-bold uppercase tracking-widest text-center shadow-lg ${
                    project.status === 'completed' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-amber-500 text-white'
                  }`}>
                    {project.status}
                  </div>
                </div>

                <div className="p-8 pb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-col md:flex-row gap-8 p-8 flex-1">
                  {/* Project Image */}
                  <div className="w-full md:w-2/5 aspect-video md:aspect-square rounded-2xl overflow-hidden relative border border-foreground/5 bg-foreground/5">
                    <img
                      src={project.image}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 p-2"
                      alt={project.title}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-muted leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Links</span>
                        <ProjectLinks links={project.links} />
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Tech Stack</span>
                        <ProjectTechs techs={project.tech} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-foreground/5 border-t border-foreground/5 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase">
                    Refined Experience
                  </span>
                  <span className="text-xs text-muted font-mono">
                    Updated {project.date}
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 glass rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/10 transition-colors"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-xl transition-all ${
                    currentPage === i + 1 
                      ? 'bg-accent text-white shadow-lg' 
                      : 'glass hover:bg-foreground/10'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 glass rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/10 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
