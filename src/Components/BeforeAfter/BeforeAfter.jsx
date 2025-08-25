"use client";
import ReactCompareImage from "react-compare-image";

const BeforeAfter = ({ beforeImg, afterImg }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      
      <ReactCompareImage
        leftImage={beforeImg}
        rightImage={afterImg}
        sliderLineColor="#22c55e" // Tailwind green
      />
    </div>
  );
};

export default BeforeAfter;
