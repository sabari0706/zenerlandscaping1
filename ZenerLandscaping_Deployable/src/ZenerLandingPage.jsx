
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ZenerLandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const certificates = [
    {
      title: "ISO 9001:2015 – Quality Management System",
      img: "/images/certificate_iso9001.jpg"
    },
    {
      title: "ISO 14001:2015 – Environmental Management System",
      img: "/images/certificate_iso14001.jpg"
    },
    {
      title: "ISO 45001:2018 – Health & Safety Management System",
      img: "/images/certificate_iso45001.jpg"
    },
    {
      title: "Dubai Municipality Registered Supplier",
      img: "/images/certificate_dubaimunicipality.jpg"
    }
  ];

  const clientLogos = ["gems", "mclaren", "adnoc", "dewa"];

  const projectImages = Array.from({ length: 20 }, (_, i) => `/images/project_img_${i + 1}.jpeg`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-green-600 text-white font-sans">
      <header className="p-6 shadow-lg bg-opacity-30 backdrop-blur-md bg-white/10 sticky top-0 z-50">
        <h1 className="text-4xl font-bold text-center text-lime-300 animate-pulse">Zener Landscaping L.L.C</h1>
        <p className="text-center text-sm mt-2 text-green-100">Creating Tomorrow's Landscapes Today</p>
      </header>

      <section className="p-10 grid md:grid-cols-2 gap-6">
        <div data-aos="fade-right" className="rounded-xl bg-white/10 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-lime-200 mb-4">Certified Expertise</h2>
          <ul className="list-disc pl-5 text-sm text-green-100">
            {certificates.map((cert, idx) => (
              <li key={idx}>{cert.title}</li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-left" className="rounded-xl overflow-hidden shadow-xl">
          <img
            src="/images/certificate_iso9001.jpg"
            alt="ISO 9001"
            className="w-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      <section className="p-10 bg-white/10 rounded-xl m-6" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-lime-300 mb-6">Project Highlights</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Project ${i + 1}`}
                className="w-full h-52 object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="p-10 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-lime-200 mb-4">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {clientLogos.map((name, idx) => (
            <img
              key={idx}
              src={`/images/logo_${name}.jpg`}
              alt={name}
              className="h-16 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          ))}
        </div>
      </section>

      <footer className="p-6 text-center text-green-200 text-sm">
        &copy; 2025 Zener Landscaping L.L.C – All Rights Reserved
      </footer>
    </div>
  );
}
