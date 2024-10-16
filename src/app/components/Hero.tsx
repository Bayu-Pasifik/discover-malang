"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // Animasi teks masuk
    gsap.fromTo(
      ".hero-text h1",
      { opacity: 0, y: 50 }, // posisi awal
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      ".hero-text p",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".hero-text button",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: "power3.out" }
    );

    // Animasi tulisan "Slide to Continue"
    gsap.fromTo(
      ".slide-to-continue",
      { opacity: 0, y: 50 }, // posisi awal
      { opacity: 1, y: 0, duration: 1.5, delay: 2, ease: "power3.out" }
    );

    // Efek Parallax pada gambar latar
    gsap.to(".parallax-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-hero-image parallax-bg bg-cover bg-fixed"
        style={{ backgroundImage: "url('/images/bg-malang.jpg')" }}
      ></div>

      {/* Overlay untuk teks */}
      <div className="relative text-center text-white hero-text z-10">
        <h1 className="text-5xl font-bold mb-4">
          Selamat Datang di Discover Malang
        </h1>
        <p className="text-lg mb-6">
          Temukan keindahan, budaya, dan kuliner kota Malang
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md transform transition-transform duration-300 hover:scale-105">
          Jelajahi Sekarang
        </button>
      </div>

      {/* Overlay hitam untuk meningkatkan kontras */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Hero;
