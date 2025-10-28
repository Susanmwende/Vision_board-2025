import React from "react";

const Outfits = () => {
  // Array of image paths for the vision board
  const images = [
    "/images/outfit2.jpeg",
    "/images/outfit3.jpeg",
    "/images/outfit4.jpeg",
    "/images/outfit5.jpeg",
    "/images/outfit7.jpeg",
    "/images/outfit1.jpeg",
    "/images/outfit8.jpeg",
    "/images/outfit10.jpeg",
    "/images/outfit11.jpeg",
    "/images/outfit12.jpeg",
    "/images/outfit13.jpeg",
    "/images/outfit15.jpeg",
    "/images/outfit21.jpeg",
    "/images/outfit6.jpeg",
    "/images/outfit18.jpeg",
    "/images/outfit23.jpeg",
    "/images/outfit24.jpeg",
    "/images/outfit27.jpeg",
    "/images/outfit16.jpeg",
    "/images/outfit17.jpeg",
    "/images/outfit14.jpeg",
    "/images/outfit19.jpeg",
    "/images/outfit20.jpeg",
    "/images/outfit9.jpeg",
    "/images/outfit22.jpeg",
    "/images/outfit26.jpeg",
    "/images/outfit25.jpeg",
    "/images/outfit28.jpeg",




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
              className=" w-full h-96 rounded-lg shadow-md"
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
