"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const triggerElement = ".about-section"; // Selector untuk section ini

    // Membuat animasi ketika bagian About terlihat
    const animationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 75%", // Ubah dari 80% ke 75%
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    // Animasi untuk judul
    animationTimeline.fromTo(
      ".about-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );

    // Animasi untuk setiap paragraf dan gambar
    const items = document.querySelectorAll(".about-item");
    items.forEach((item, index) => {
      const text = item.querySelector(".about-text");
      const image = item.querySelector(".about-image");

      // Animasi untuk teks
      animationTimeline.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.3, // Ganti dari 0.5 menjadi 0.3
          ease: "power3.out",
        },
        "-=0.1" // Tumpang tindih dengan animasi sebelumnya lebih sedikit
      );

      // Animasi untuk gambar
      animationTimeline.fromTo(
        image,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.3, // Ganti dari 0.5 menjadi 0.3
          ease: "power3.out",
        },
        "-=0.1"
      );
    });

    // Cleanup untuk ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="about-section py-12 px-6 bg-white text-gray-800">
      <h2 className="about-title text-3xl font-bold text-center mb-8">
        Tentang Malang
      </h2>

      {/* Gambar dan Tulisan Bergantian */}
      <div className="flex flex-col gap-12">
        {/* Baris Pertama */}
        <div className="about-item flex flex-col md:flex-row items-center justify-center">
          <img
            src="/images/bg-malang.jpg" // Ganti dengan path gambar yang sesuai
            alt="Pemandangan Malang"
            className="about-image mx-auto rounded-lg shadow-lg w-full max-w-md md:max-w-xs md:mr-6"
          />
          <p className="about-text text-lg leading-relaxed max-w-2xl md:ml-6">
            Malang adalah kota yang penuh dengan sejarah dan keindahan. Dikenal
            dengan iklim sejuk dan pemandangan alam yang menakjubkan, Malang
            menawarkan pengalaman yang beragam dari wisata budaya hingga
            petualangan alam.
          </p>
        </div>

        {/* Baris Kedua */}
        <div className="about-item flex flex-col md:flex-row items-center justify-center">
          <p className="about-text text-lg leading-relaxed max-w-2xl md:mr-6">
            Dari Candi Singosari yang bersejarah hingga kebun apel yang subur,
            kota ini memiliki segalanya. Malang juga dikenal dengan kuliner
            khasnya seperti bakso dan rawon yang lezat, serta suasana kota yang
            ramah dan nyaman.
          </p>
          <img
            src="/images/bg-malang.jpg" // Ganti dengan path gambar yang sesuai
            alt="Pemandangan Malang"
            className="about-image mx-auto rounded-lg shadow-lg w-full max-w-md md:max-w-xs md:ml-6"
          />
        </div>

        {/* Baris Ketiga */}
        <div className="about-item flex flex-col md:flex-row items-center justify-center">
          <img
            src="/images/bg-malang.jpg" // Ganti dengan path gambar yang sesuai
            alt="Pemandangan Malang"
            className="about-image mx-auto rounded-lg shadow-lg w-full max-w-md md:max-w-xs md:mr-6"
          />
          <p className="about-text text-lg leading-relaxed max-w-2xl md:ml-6">
            Kunjungi Malang dan temukan pesonanya yang menanti untuk dijelajahi.
            Dari keindahan alam hingga warisan budaya, Malang adalah destinasi
            yang tidak boleh Anda lewatkan!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
