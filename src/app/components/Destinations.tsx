'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Destinations = () => {
  useEffect(() => {
    gsap.from('.destination-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
    });
  }, []);

  const destinations = [
    { name: "Pantai Balekambang", img: "/images/balekambang.jpg" },
    { name: "Candi Singosari", img: "/images/singosari.jpg" },
    { name: "Kampung Warna-Warni", img: "/images/jodipan.jpg" }
  ];

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Destinasi Populer</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <div key={index} className="destination-card bg-white rounded-lg shadow-md overflow-hidden">
            <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
