'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.from('.hero-text', { opacity: 0, y: 50, duration: 10, stagger: 0.2 });
  }, []);

  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center bg-hero-image">
      <div className="text-center text-white hero-text">
        <h1 className="text-5xl font-bold mb-4">Selamat Datang di Discover Malang</h1>
        <p className="text-lg mb-6">Temukan keindahan, budaya, dan kuliner kota Malang</p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md">
          Jelajahi Sekarang
        </button>
      </div>
    </section>
  );
};

export default Hero;
