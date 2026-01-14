import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 pt-16">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 dark:bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300/30 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 2px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-6 drop-shadow-sm">
          Hello, I'm{" "}
          <span className="text-slate-800 dark:text-slate-100">
            Kishore Koppula
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Full Stack Developer
        </h2>
        <p className="text-lg text-justify md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Results-driven Full Stack Developer with 3+ years of professional
          experience building scalable, secure, and high-performance web
          applications. Strong expertise in{" "}
          <b>
            JavaScript, React.js, Node.js, C# .NET, MySQL, SQL Server, and
            MongoDB
          </b>
          , with a proven ability to design and implement robust RESTful APIs,
          debug complex systems, and deliver reliable production-ready
          solutions.
          <br />
          <br />
          Experienced in cloud technologies, particularly <b>AWS</b>, and modern
          DevOps practices including{" "}
          <b>Docker, Kubernetes, and CI/CD pipelines</b>. Adept at working in
          Agile/Scrum environments, collaborating with cross-functional teams,
          and delivering user-centric applications that enhance usability and
          drive measurable business growth.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/kishorekoppula906"
            target="_blank"
            className="flex items-center space-x-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 group"
          >
            <Linkedin className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/kishore906"
            target="_blank"
            className="flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
