import Lottie from "lottie-react";
import classNames from "classnames";

import ButtonStartProject from "../../../shared/ui/buttons/ButtonStartProject/ButtonStartProject";
import LightDivider from "../../../shared/ui/lines/LightDivider/LightDivider";
import HeroTitle from "./HeroTitle/HeroTitle";

import lottieAnimation from "../../../shared/assets/video/hero-section-animation.json";

const SectionHero = () => {
  return (
    <section className="flex h-[100vh] w-full flex-col bg-[#1a1a1a] pt-20 text-xl text-white">
      {/* title and animation in row */}
      <div className="flex flex-5">
        <div
          className={classNames(
            "mx-auto flex max-w-[1450px] flex-col items-center justify-around px-6",
            "sm:flex-row sm:items-center sm:justify-between",
            "xl:gap-50"
          )}
        >
          <HeroTitle />

          <div className="max-h-[600px] max-w-[600px]">
            <Lottie
              animationData={lottieAnimation}
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      <div className="relative flex-[2] md:flex-1">
        <LightDivider />

        <div className="Container flex flex-col justify-between md:flex-row">
          <p>We create websites that leave a strong and lasting impression.</p>
          <ButtonStartProject className="absolute right-10 bottom-10 md:static md:right-auto md:bottom-auto" />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
