import { CheckBar } from "./compo/Checkbar";
import Features from "./compo/Features";
import { Hero } from "./compo/Herosection";
import f1 from "../../public/f1.png";
import f2 from "../../public/f2.png";
import f3 from "../../public/f3.png";
import QA from "./compo/QA";
import Pricing from "./compo/Pricing";
import gardient2 from "../../public/Gradient-2.png";
import rightArr from "../../public/Arrow1.png";
import Image from "next/image";
import Footer from "./compo/Footer";
export default function Home() {
  const listText1: { value: string }[] = [
    { value: "Lorem ipsum dolor sit amet" },
    { value: "Consectetur adipiscing elit" },
    { value: "Sed do eiusmod tempor incididunt ut labore " },
  ];
  const listText2: { value: string }[] = [
    { value: "Lorem ipsum dolor sit amet" },
    { value: "Consectetur adipiscing elit" },
    { value: "Sed do eiusmod tempor incididunt ut labore " },
  ];

  const p1 =
    "Stay on top of things and revamp your work process with our game-changing feature. Get a bird eye view with our customizable dashboard.";
  return (
    <>
      <CheckBar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-2 lg:mx-auto" id="features">
        <Features
          listText={listText1}
          heading3="Sales Monitoring"
          heading1={"Simplify your sales monitoring"}
          image={f1}
          paragraph={p1}
          btnColor={"#0085FF"}
          postionOfPic="reverse"
          rightOrLeftPadding={true}
          heading3Color="#0085FF"
        />
        <Features
          listText={listText2}
          heading3="Customer Support"
          heading1={"Get in touch with your customers"}
          image={f2}
          paragraph={p1}
          btnColor={"#00A424"}
          postionOfPic="normal"
          rightOrLeftPadding={false}
          heading3Color="#00A424"
        />
        <Features
          listText={[]}
          heading3="Growth Monitoring"
          heading1={"Monitor your site’s new subscribers "}
          image={f3}
          paragraph={p1}
          btnColor={"#EB2891"}
          postionOfPic="reverse"
          rightOrLeftPadding={true}
          heading3Color="#EB2891"
        />
      </div>
      <div className="px-[20px] mt-[56px] lg:container lg:px-2 lg:mx-auto">
        <QA />
      </div>
      <div className="px-[20px] lg:container lg:px-2 lg:mx-auto" id="pricing">
        <Pricing />
      </div>
      <div className="px-[20px] lg:container lg:px-2 lg:mx-auto">
        <div className="relative flex w-full justify-center rounded-lg">
          <Image
            src={gardient2}
            alt="gardient 2 img"
            className="w-full h-[483px] rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center py-[56px]  z-10">
            <h1
              className="text-white px-12 lg:pt-[89px] lg:px-[324px] text-center text-[32px] 
            lg:text-[56px] font-medium leading-10 lg:leading-[64px]"
            >
              Monitor your website like a pro
            </h1>

            <p className="pt-[24px] lg:pt-12 text-[#fff] px-8 lg:px-[324px] text-center text-[16px] lg:text-[18px] font-[400px] leading-6 lg:leading-7">
              Join over 800+ happy site owners boosting productivity and
              efficiency!
            </p>
            <div className="pt-[40px] lg:pt-[56px] lg:px-[460px] flex flex-col lg:flex-row lg:py-[56px] lg:gap-x-4 gap-y-8 w-full justify-center items-center">
              <button className="px-8 py-4 bg-white text-center">
                <span className="text-[#EB2891] text-center text-[18px] font-medium leading-6">
                  Try for free
                </span>
              </button>
              <div className="flex gap-x-3">
                <button>
                  <span className="text-white text-[18px] font-medium leading-6">
                    Contact Sales
                  </span>
                </button>
                <Image src={rightArr} alt="arrow png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[20px] lg:container lg:px-2 lg:mx-auto">
        <Footer />
      </div>
    </>
  );
}
