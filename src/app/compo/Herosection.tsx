import Image from "next/image";
import Gradient from "../../../public/Gradient.png";
import imageMobile from "../../../public/Image1.png";
import Google from "../../../public/Google.svg";
import Clutch from "../../../public/Clutch.svg";
import cnnLogo from "../../../public/CNN-logo.png";
import Slack from "../../../public/Slack.svg";
import Trustpilot from "../../../public/Trustpilot.svg";

export function Hero() {
  return (
    <div className="mx-5">
      <div className="mt-4 mx-5 lg:mx-[296px] lg:mt-11">
        <h1 className="text-[#172026] text-center font-medium lg:font-[600px] text-[32px] lg:text-[64px] leading-10 lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
      </div>
      <div className="mt-6 mx-5 lg:mx-[260px]">
        <p className="text-[#36485C] text-center font-[400px] text-[16px] lg:text-[18px] leading-6 lg:leading-7">
          Get a bird&#39;s eye view with our customizable dashboard. Stay on top
          of things! Revamp your work process with our game-changing feature.
          Boost productivity and efficiency!
        </p>
      </div>
      <div className="flex w-full mx-5 mt-6 gap-x-5 lg:gap-x-10 justify-center">
        <button className="bg-[#4328EB] w-1/2 lg:w-1/6 rounded px-8 py-4 text-white text-[18px] font-medium text-center leading-6">
          Try for free
        </button>

        <button className="text-[#4328EB] w-1/2 lg:w-1/6 flex items-center gap-x-1 text-[18px] font-medium lg:leading-6">
          <span>View Pricing</span>
          <Image
            src={"/Arrow.svg"}
            className="pt-1"
            alt="right arrow"
            width={16}
            height={16}
          />
        </button>
      </div>

      <div className="relative flex w-full h-full justify-center lg:mt-14">
        <Image
          src={Gradient}
          alt="gradient image"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={imageMobile}
            alt="mobile image"
            className="-ml-6 h-[301px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />
          <div className="flex flex-col w-full items-center lg:items-center lg:container lg:flex-row lg:justify-between lg:px-2 ">
            <p className="text-[#FFFFFF] text-[16px] lg:pt-[15.5px] font-[400px] leading-6 lg:pr-[72px]">
              Trusted by these companies
            </p>
            <div
              className="grid grid-cols-3 lg:grid-cols-5
             items-center justify-center justify-items-center px-[20px] mt-5 align-middle"
            >
              <Image src={Google} alt="google" />
              <Image src={Clutch} alt="Clutch" />
              <Image src={Trustpilot} alt="Trustpilot" />
              <Image src={cnnLogo} alt="cnnLogo" />
              <Image src={Slack} alt="Slack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
