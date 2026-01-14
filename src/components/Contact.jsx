import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12 space-x-3">
          <Mail className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center hover:shadow-lg transition-shadow group">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Address
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Sydney, New South Wales
              <br />
              Australia, 2142
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center hover:shadow-lg transition-shadow group">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Email
            </h3>
            <a
              href="mailto:hello@example.com"
              className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              kkishore906@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center hover:shadow-lg transition-shadow group">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Mobile
            </h3>
            <a
              href="tel:+1234567890"
              className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              +61452497749
            </a>
          </div>
        </div>

        <div className="mt-16 text-center pt-8 border-t border-slate-100 dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
