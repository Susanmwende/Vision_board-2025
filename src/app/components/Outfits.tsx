import React from "react";

const Outfits = () => {
  // Array of image paths for the vision board
  const images = [
    "/images/Abundance.jpeg",
    "/images/graduate.jpeg",
    "/images/job.jpeg",
    "/images/contract.jpeg",
    "/images/couple.jpeg",
    "/images/coast.jpeg",
    "/images/Love Selfie.jpeg",
    "/images/plane.jpeg",
    "/images/dubai.jpeg",
    "/images/passports.jpeg",
    "/images/affirmation.jpeg",
    "/images/money.jpeg",
    "/images/heels.jpeg",
    "/images/skin care.jpeg",
    "/images/shopping.jpeg",
    "/images/code space.jpeg",
    "/images/iphone 12 pro.jpeg",
    "/images/opportunities.jpeg",
    "/images/own business.jpeg",
    "/images/success.jpeg",
    "/images/Car.jpeg",
    "/images/house.jpg",
    "/images/new home.jpeg",
    "/images/family.jpeg",
  ];

  return (
    <div className="outfits-container px-4 py-6">
      {/* Stylish Heading */}
      <h1 className="text-center text-6xl font-bold  mb-8 underline decoration-dashed decoration-2 underline-offset-4">
        Outfits
      </h1>

      <div className="outfits-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="outfit-card relative group">
            <img
              src={src}
              alt={`Vision ${index + 1}`}
              className="outfit-image w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div className="outfit-overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
            <p className="outfit-caption absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Vision {index + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outfits;
