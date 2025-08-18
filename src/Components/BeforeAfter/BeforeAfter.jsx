"use client";
import ReactCompareImage from "react-compare-image";

const BeforeAfter = ({ beforeImg, afterImg, title }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      
      <ReactCompareImage
        leftImage={beforeImg}
        rightImage={afterImg}
        sliderLineColor="#22c55e" // Tailwind green
      />
    </div>
  );
};

export default BeforeAfter;
