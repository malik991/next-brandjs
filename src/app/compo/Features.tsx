import Image from "next/image";

import check from "../../../public/check-1.svg";
import arrowRight from "../../../public/Arrow.svg";
interface FeaturesProps {
  listText: { value: string }[];
  heading3: string;
  heading3Color: string;
  heading1: string;
  image: any;
  paragraph: string;
  btnColor: string;
  postionOfPic: string;
  rightOrLeftPadding: boolean;
}
const Features: React.FC<FeaturesProps> = ({
  listText,
  heading3,
  heading3Color,
  heading1,
  image,
  paragraph,
  btnColor,
  postionOfPic,
  rightOrLeftPadding,
}) => {
  const flexDirectionClass =
    postionOfPic === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row";
  const paddingClass = rightOrLeftPadding ? "lg:pr-[56px]" : "lg:pl-[56px]";
  return (
    <div className="flex flex-col pt-[56px] lg:pt-[120px] gap-y-[72px] lg:gap-y-[80px]">
      <div className={`flex flex-col lg:gap-x-[56px] ${flexDirectionClass}`}>
        <div className="flex-1 hidden lg:block">
          <Image
            src={image}
            alt="feature img"
            width={628}
            height={628}
            className="w-full h-auto"
          />
        </div>
        <div className={`flex-1 lg:py-[56px] ${paddingClass}`}>
          <h3
            className="text-[16px] font-medium leading-6"
            style={{ color: heading3Color }}
          >
            {heading3}
          </h3>
          <h1 className="text-[24px] font-medium text-[#172026] leading-9 mt-3">
            {heading1}
          </h1>
          <div className="pt-[24px] lg:hidden">
            <Image src={image} alt="feature img" className="w-full h-auto" />
          </div>
          <p className="pt-[24px] text-[#36485C] text-[16px] font-[400px] leading-6">
            {paragraph}
          </p>
          {listText?.length > 0 ? (
            <ul className="pt-[24px]">
              {listText.map((text, index) => (
                <div
                  key={index}
                  className="flex gap-x-[16px] items-center py-3"
                >
                  <li>
                    <Image
                      src={check}
                      alt="check image"
                      className="text-[#36485C]"
                    />
                  </li>
                  <li className="text-[#36485C] text-[16px] font-[400px] leading-6">
                    {text.value}
                  </li>
                </div>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-2 items-center py-6 gap-x-6">
              <div className="flex flex-col gap-y-3">
                <span className="text-[#172026] text-[20px] font-medium leading-6">
                  100+
                </span>
                <span className="text-[#36485C] text-[16px] font-[400px] leading-6">
                  Lorem ipsum dolor sit
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-[#172026] text-[20px] font-medium leading-6">
                  800+
                </span>
                <span className="text-[#36485C] text-[16px] font-[400px] leading-6">
                  Conse adipiscing elit
                </span>
              </div>
            </div>
          )}

          <button className="pt-[24px]">
            <div className="flex gap-x-3 py-2 items-center">
              <span
                className="text-[16px] font-medium leading-6"
                style={{ color: btnColor }}
              >
                Learn more
              </span>
              <Image src={arrowRight} alt="arrow svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
