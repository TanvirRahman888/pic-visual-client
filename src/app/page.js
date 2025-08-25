import BeforeAfter from "@/Components/BeforeAfter/BeforeAfter";
import Hero from "@/Components/Home/Hero/Hero";
import Slider from "@/Components/Home/Slider/Slider";
import SubTitle from "@/Components/SubTitle/SubTitle";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <SubTitle title="Services" serviceDetails="Check our Service Details"> </SubTitle>
      <Slider></Slider>
      <div className="p-5 border-2 border-dotted my-5">
        <SubTitle title="Services Category" serviceDetails="Check our Services Category"> </SubTitle>

         <BeforeAfter
            beforeImg="https://fixthephoto.com/images/uikit_slider/photography-retouching-services-before-wh960.jpg"
            afterImg="https://fixthephoto.com/images/uikit_slider/photography-retouching-services-after-wh960.jpg"
          />
        </div>
        {/* <BeforeAfter
            beforeImg="https://fixthephoto.com/images/uikit_slider/photography-retouching-services-before-wh960.jpg"
            afterImg="https://fixthephoto.com/images/uikit_slider/photography-retouching-services-after-wh960.jpg"
          /> */}
      </div>
  );
}
