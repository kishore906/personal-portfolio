import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Import images
const project1 = "./project1.jpg";
const project2 = "./project2.jpg";
const project3 = "./project3.jpg";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "Engineered a scalable full-stack e-commerce platform with advanced search capabilities, secure Stripe payment integration, and granular role-based access control (RBAC). Features dynamic cart management and real-time inventory tracking.",
      image: project1,
      link: "https://github.com/kishore906/MERN-Ecommerce-Full-Stack-App",
      tags: ["React", "Bootstrap", "Node.js", "MongoDB", "JWT", "Stripe", "Redux", "RTK Query"]
    },
    {
      title: "Learning Management System",
      description: "Architected a comprehensive Learning Management System enabling seamless course enrollment, progress tracking, and interactive ratings. Implemented secure authentication and personalized dashboards to enhance the educational experience.",
      image: project2,
      link: "https://github.com/kishore906/11-LMS",
      tags: ["Tailwind CSS", "React", "Context API", "Node.js", "MongoDB", "JWT", "Stripe"]
    },
    {
      title: "Job Portal Web Application",
      description: "Built a secure, high-performance job recruitment portal with separate dashboards for candidates and admins. Includes advanced filtering, application lifecycle tracking, and optimized SQL queries for scalability.",
      image: project3,
      link: "https://github.com/kishore906/JobPortalWebApplication",
      tags: ["Tailwind CSS", "React.js", "Redux", "RTK Query", "C# .NET Web API", "SQL Server", "JWT"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12 space-x-3">
          <ExternalLink className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:-translate-y-2"
            >
              <div className="relative h-50 overflow-hidden">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse" /> {/* Loading state placeholder equivalent */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide if not found for now
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
