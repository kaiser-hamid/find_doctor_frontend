"use client";
import Aos from "aos";
import { useEffect } from "react";
import { FaSync } from "react-icons/fa";

//aos css
// import "aos/src/sass/aos.scss";
import "aos/dist/aos.css";

export default function ChamberSection() {
  useEffect(() => {
    initAos();
  }, []);

  const initAos = () => {
    Aos.init({
      offset: 100,
      duration: 300,
      easing: "ease-in-sine",
      delay: 100,
    });
  };
  return (
    <section class="sm:py-12 lg:py-20">
      <div class="container">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-16">
          <div class="border rounded p-6 bg-teal-100" data-aos="fade-up">
            <h3 class="text-xl">Get in touch</h3>
            <p class="text-slate-700 mt-3">
              Get in touch with our professional business development team and
              they'll answer your question shortly
            </p>
            <div class="mt-12 mb-3">
              <a
                href="#"
                class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div class="border rounded p-6 bg-pink-100" data-aos="fade-up">
            <h3 class="text-xl">Explore Knowledge Base</h3>
            <p class="text-slate-700 mt-3">
              Learn more about all the features and functionality from our
              detailed knowledge base.
            </p>
            <div class="mt-12 mb-3">
              <a
                href="#"
                class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Explore
              </a>
            </div>
          </div>
          <div class="border rounded p-6 bg-orange-100" data-aos="fade-up">
            <h3 class="text-xl">Explore Knowledge Base</h3>
            <p class="text-slate-700 mt-3">
              Learn more about all the features and functionality from our
              detailed knowledge base.
            </p>
            <div class="mt-12 mb-3">
              <a
                href="#"
                class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Explore
              </a>
            </div>
          </div>
          <div class="border rounded p-6 bg-lime-100" data-aos="fade-up">
            <h3 class="text-xl">Explore Knowledge Base</h3>
            <p class="text-slate-700 mt-3">
              Learn more about all the features and functionality from our
              detailed knowledge base.
            </p>
            <div class="mt-12 mb-3">
              <a
                href="#"
                class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Explore
              </a>
            </div>
          </div>
          <div class="border rounded p-6 bg-blue-100" data-aos="fade-up">
            <h3 class="text-xl">Explore Knowledge Base</h3>
            <p class="text-slate-700 mt-3">
              Learn more about all the features and functionality from our
              detailed knowledge base.
            </p>
            <div class="mt-12 mb-3">
              <a
                href="#"
                class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Explore
              </a>
            </div>
          </div>
          <div class="border rounded p-6 bg-cyan-100" data-aos="fade-up">
            <h3 class="text-xl">Explore Knowledge Base</h3>
            <p class="text-slate-700 mt-3">
              Learn more about all the features and functionality from our
              detailed knowledge base.
            </p>
            <div class="mt-12 mb-3">
              <a
                href="#"
                class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Explore
              </a>
            </div>
          </div>
          <div class="border rounded p-6 bg-rose-100" data-aos="fade-up">
            <h3 class="text-xl">Explore Knowledge Base</h3>
            <p class="text-slate-700 mt-3">
              Learn more about all the features and functionality from our
              detailed knowledge base.
            </p>
            <div class="mt-12 mb-3">
              <a
                href="#"
                class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Explore
              </a>
            </div>
          </div>
          <div class="border rounded p-6 bg-purple-100" data-aos="fade-up">
            <h3 class="text-xl">Explore Knowledge Base</h3>
            <p class="text-slate-700 mt-3">
              Learn more about all the features and functionality from our
              detailed knowledge base.
            </p>
            <div class="mt-12 mb-3">
              <a
                href="#"
                class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-24">
          <button
            type="button"
            className="flex items-center gap-1 text-center p-2 h-[38px] rounded border border-primary text-white bg-primary hover:shadow hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-150"
          >
            <FaSync className="inline" /> Load more
          </button>
        </div>
      </div>
    </section>
  );
}
