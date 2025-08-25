import BeforeAfter from "@/Components/BeforeAfter/BeforeAfter";
import Hero from "@/Components/Home/Hero/Hero";
import Slider from "@/Components/Home/Slider/Slider";
import SubTitle from "@/Components/SubTitle/SubTitle";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Slider></Slider>
      <SubTitle title="Services" serviceDetails="Check our Service Details"> </SubTitle>
      <BeforeAfter
        title="Website Redesign"
        beforeImg="https://fixthephoto.com/images/uikit_slider/photography-retouching-services-before-wh960.jpg"
        afterImg="https://fixthephoto.com/images/uikit_slider/photography-retouching-services-after-wh960.jpg"
      />
    </div>
  );
}
