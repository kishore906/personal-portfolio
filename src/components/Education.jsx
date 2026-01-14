import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master's Degree in Information Technology",
      institution: "University of Southern Queensland, Toowoomba, Australia",
      year: "June 2016 - Nov 2018",
      description: "Specialized in Web Application Development."
    },
    {
      degree: "Bachelor's Degree in Computer Science & Engineering",
      institution: "Jawaharlal Nehru Technological University, Hyderabad, India",
      year: "June 2011 - June 2015",
      description: "Foundation in Computer Science, Database Management, and Web Development."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12 space-x-3">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.degree}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">{item.institution}</p>
              <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
