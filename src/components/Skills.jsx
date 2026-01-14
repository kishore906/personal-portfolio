import React from 'react';
import { Code2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "TypeScript"],
      color: "hover:bg-blue-500",
      borderColor: "border-blue-200 dark:border-blue-900",
      text: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Backend",
      skills: ["Node.js", "C# .NET Core", "RESTful APIs", "Microservices", "RabbitMQ", "Redis"],
      color: "hover:bg-emerald-500",
      borderColor: "border-emerald-200 dark:border-emerald-900",
      text: "text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQL Server", "MongoDB"],
      color: "hover:bg-amber-500",
      borderColor: "border-amber-200 dark:border-amber-900",
      text: "text-amber-600 dark:text-amber-400"
    },
    {
      title: "Cloud",
      skills: ["AWS (EC2, S3, EKS, ECR)"],
      color: "hover:bg-orange-500",
      borderColor: "border-orange-200 dark:border-orange-900",
      text: "text-orange-600 dark:text-orange-400"
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "Git & GitHub", "CI/CD (GitHub Actions, ArgoCD)"],
      color: "hover:bg-purple-500",
      borderColor: "border-purple-200 dark:border-purple-900",
      text: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Testing",
      skills: ["Jest", "React Testing Library", "Postman"],
      color: "hover:bg-rose-500",
      borderColor: "border-rose-200 dark:border-rose-900",
      text: "text-rose-600 dark:text-rose-400"
    },
    {
      title: "Project Management",
      skills: ["Jira", "Confluence", "Agile Scrum"],
      color: "hover:bg-indigo-500",
      borderColor: "border-indigo-200 dark:border-indigo-900",
      text: "text-indigo-600 dark:text-indigo-400"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12 space-x-3">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl border ${category.borderColor} bg-slate-50 dark:bg-slate-900/50 hover:shadow-lg transition-all duration-300`}
            >
              <h3 className={`text-xl font-bold mb-4 ${category.text}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className={`px-3 py-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-white ${category.color} transition-colors duration-300 cursor-default font-medium text-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
