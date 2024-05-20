import Image from "next/image";
import check from "../../../public/check-1.svg";
import checkWhite from "../../../public/check-white.svg";
export default function Pricing() {
  return (
    <div className="flex flex-col py-12">
      <div className="flex flex-col ">
        <h2 className="text-[#172026] text-[24px] lg:text-[42px] font-medium leading-9 lg:leading-[58px] text-center">
          Flexible plans for you
        </h2>
        <p className="pt-[16px] text-center text-[#36485C] text-[16px] lg:text-[18px] font-[400]  leading-6 lg:leading-7">
          No hidden fees!
        </p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-6 mt-10 lg:mt-16">
        <div className="flex flex-col bg-[#F5F4FF] p-6 mt-6 rounded-lg">
          <div>
            <h3 className="text-[#4328EB] text-[18px] lg:text-[20px] font-medium leading-6 lg:leading-[26px]">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] text-[16px] lg:text-[18px] font-[400px] leading-6 lg:leading-7">
              Perfect for testing the waters
            </p>
          </div>

          <div className="flex py-4 lg:py-8">
            <h2 className="text-[#172026] text-[24px] lg:text-[32px] font-medium leading-9 lg:leading-10">
              $0
            </h2>
            <span className="text-[#5F7896] text-[24px] lg:text-[32px] font-medium leading-9 lg:leading-10">
              /mo
            </span>
          </div>
          <div className="lg:pb-[32px]">
            <ul>
              <li className="flex gap-x-4 items-center">
                <Image src={check} alt="check img" />
                <span className="text-[#36485C] text-[16px] font-[400px] leading-6">
                  Lorem ipsum dolor sit amet
                </span>
              </li>
              <li className="flex gap-x-4 items-center py-2">
                <Image src={check} alt="check img" />
                <span className="text-[#36485C] text-[16px] font-[400px] leading-6">
                  Sed do eiusmod tempor incididunt
                </span>
              </li>
              <li className="flex gap-x-4 items-center">
                <Image src={check} alt="check img" />
                <span className="text-[#36485C] text-[16px] font-[400px] leading-6">
                  Consectetur adipiscing elit
                </span>
              </li>
            </ul>
          </div>
          <div className="pt-[16px] lg:pt-[32px]">
            <button className="px-[30px] py-[14px] bg-white w-full rounded ">
              <span className="text-[#4328EB] text-[16px] font-medium leading-6">
                Start Trial
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col p-6 mt-6 rounded-lg bg-[#4328EB]">
          <h2 className="text-[#FFFFFF] text-[18px] lg:text-[20px] font-medium leading-6 lg:leading-[26px]">
            Business
          </h2>
          <p className="pt-3 text-[#F4F8FA] text-[16px] lg:text-[18px] font-[400px] leading-6 lg:leading-7">
            Perfect for small businesses
          </p>
          <div className="flex py-4 lg:py-8">
            <h2 className="text-[#FFFFFF] text-[24px] lg:text-[32px] font-medium leading-9 lg:leading-10">
              $500
            </h2>
            <span className="text-[#F4F8FA] text-[24px] lg:text-[32px] font-medium leading-9 lg:leading-10">
              /mo
            </span>
          </div>
          <div className="lg:pb-[32px]">
            <ul>
              <li className="flex gap-x-4 items-center">
                <Image src={checkWhite} alt="check img" />
                <span className="text-[#F4F8FA] text-[16px] font-[400px] leading-6">
                  Lorem ipsum dolor sit amet
                </span>
              </li>
              <li className="flex gap-x-4 items-center py-2">
                <Image src={checkWhite} alt="check img" />
                <span className="text-[#F4F8FA] text-[16px] font-[400px] leading-6">
                  Sed do eiusmod tempor incididunt
                </span>
              </li>
              <li className="flex gap-x-4 items-center">
                <Image src={checkWhite} alt="check img" />
                <span className="text-[#F4F8FA] text-[16px] font-[400px] leading-6">
                  Consectetur adipiscing elit
                </span>
              </li>
              <li className="flex gap-x-4 items-center">
                <Image src={checkWhite} alt="check img" />
                <span className="text-[#F4F8FA] text-[16px] font-[400px] leading-6">
                  Lorem ipsum dolor sit amet
                </span>
              </li>
              <li className="flex gap-x-4 items-center">
                <Image src={checkWhite} alt="check img" />
                <span className="text-[#F4F8FA] text-[16px] font-[400px] leading-6">
                  Sed do eiusmod tempor incididunt
                </span>
              </li>
            </ul>
          </div>
          <div className="pt-[16px] lg:pt-[32px]">
            <button className="px-[30px] py-[14px] bg-white w-full rounded ">
              <span className="text-[#4328EB] text-[16px] font-medium leading-6">
                Get Started
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col p-6 mt-6 rounded-lg bg-[#F5F4FF]">
          <h3 className="text-[#4328EB] text-[18px] lg:text-[20px] font-medium leading-6 lg:leading-[26px]">
            Enterprise
          </h3>
          <p className="pt-[12px] text-[#36485C] text-[16px] lg:text-[18px] font-[400px] leading-6 lg:leading-7">
            Perfect for big companies
          </p>
          <h1 className="py-[16px] lg:py-[32px] text-[#172026] text-[24px] lg:text-[32px]  font-medium leading-9 lg:leading-10">
            Custom
          </h1>
          <div className="flex flex-col">
            <p className="text-[#36485C] text-[16px] font-[400px] leading-6">
              Lorem ipsum dolor sit amet,
            </p>
            <p className="text-[#36485C] text-[16px] font-[400px] leading-6">
              consectetur adipiscing elit, sed do
            </p>
            <p className="text-[#36485C] text-[16px] font-[400px] leading-6">
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="text-[#36485C] text-[16px] font-[400px] leading-6 pt-4">
              Lorem ipsum dolor sit amet,
            </p>
            <p className="text-[#36485C] text-[16px] font-[400px] leading-6">
              voluptas sit aspernatur aut odit aut
            </p>
            <p className="text-[#36485C] text-[16px] font-[400px] leading-6">
              fugit. Lorem ipsum dolor sit amet,
            </p>
            <p className="text-[#36485C] text-[16px] font-[400px] leading-6">
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="pt-[16px]">
            <button className="px-[30px] py-[14px] bg-white w-full rounded ">
              <span className="text-[#4328EB] text-[16px] font-medium leading-6">
                Contact Us
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
