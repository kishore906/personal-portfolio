import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const experiences = [
    {
      position: "Freelance Full Stack Developer",
      company: "Remote | Sydney, Australia",
      period: "June 2024 - Present",
      points: [
        "Designed and implemented RESTful APIs, incorporating JWT-based authentication, role-based access control, and comprehensive data validation for a secure and resilient backend.",
        "Built responsive and user-friendly interfaces with React and Tailwind CSS, achieving 95% mobile compatibility and cross-browser reliability.",
        "Implemented RTK Query to optimize API data fetching, caching, and state management, significantly improving frontend performance and reducing redundant API calls.",
        "Designed and implemented event-driven architecture using message broker (RabbitMQ) to enable reliable, asynchronous communication between Microservices.",
        "Integrated Stripe payment gateway by implementing payment intents, webhooks, and order confirmation workflows to enable secure and seamless online transactions.",
        "Implemented automated unit and integration tests for all features using Jest and Postman, reducing the number of bugs found by 25% and improving the overall quality of the application."
      ]
    },
    {
      position: "Junior C# Developer",
      company: "Infosys Limited | Sydney, Australia",
      period: "June 2022 - Dec 2023",
      points: [
        "Designed and optimized RESTful APIs using C# .NET Core, reducing average response time by 30% through efficient code refactoring and SQL query optimization. ",
        "Collaborated with UI/UX teams to translate business requirements into intuitive front-end components using React.js, enhancing usability and ensuring seamless integration with backend APIs for a smooth user experience.",
        "Collaborated with cross-functional teams to improve system performance, optimizing SQL queries and reducing page load times, while enhancing overall reliability. ",
        "Implemented structured RESTful APIs testing with Postman, reducing production defects by 15%.",
        "Contributed to CI/CD pipeline setup and deployment automation, ensuring smooth and efficient continuous integration and delivery processes",
        "Worked in an Agile Scrum environment using Jira and Confluence for sprint planning and issue tracking, promoting effective team collaboration and improving delivery efficiency."
      ]
    },
    {
      position: "Web Developer Intern",
      company: "Global Continent Pty Ltd, Melbourne, Australia",
      period: "Nov 2019 - March 2020",
      points: [
        "Contributed to the design and development of student management portal, improving the management of student data and administrative workflows.",
        "Assisted in both front-end and back-end development using technologies like HTML, CSS, Node.js and Mysql to create responsive and user-friendly portal.",
        "Participated in UI/UX discussions and implemented changes based on stakeholder feedback.",
        "Participated in code reviews and debugging sessions, identifying and resolving critical bugs, enhancing overall application stability and reliability."
      ]
    },
    {
      position: "Web Developer Intern",
      company: "Gucons Pty Ltd, Hyderabad, India",
      period: "August 2015 - February 2016",
      points: [
        "Collaborated with senior developers to build responsive and high-performing web interfaces using HTML5, CSS3, and JavaScript, resulting in a 25% improvement in overall site efficiency.",
        "Developed feature-rich, server-rendered web pages by integrating PHP with Mysql, managing both backend logic and frontend output.",
        "Designed and executed secure, high-performance SQL queries within PHP scripts to efficiently manage database operations for various application features.",
        "Built user authentication and session management system in PHP to control access levels and ensure persistent, secure user sessions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12 space-x-3">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors text-left"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.position}</h3>
                  <p className="text-primary font-medium text-sm">{exp.company}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-slate-500 dark:text-slate-400 hidden sm:inline-block">{exp.period}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400 sm:hidden mb-4 italic">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                          <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
