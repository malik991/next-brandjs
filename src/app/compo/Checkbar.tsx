import Image from "next/image";
import logo from "../../../public/Logo.svg";
import user from "../../../public/User.svg";
import menu from "../../../public/Menu.svg";
import Link from "next/link";

export function CheckBar() {
  const itemName = [
    { name: "Features", redirectTo: "#features" },
    { name: "EnterPrise", redirectTo: "/" },
    { name: "Pricing", redirectTo: "#pricing" },
    { name: "Careers", redirectTo: "/" },
  ];
  return (
    <nav className="flex w-full justify-between items-center px-5 py-4 lg:container lg:mx-auto">
      <div className="flex items-center">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="lg:flex hidden pl-[74px]  gap-x-14">
          {itemName.length > 0 &&
            itemName.map((item, index) => (
              <Link key={index} href={item.redirectTo}>
                <span className="text-[#36485C] font-medium leading-6 text-[16px]">
                  {item.name}
                </span>
              </Link>
            ))}
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <span className="text-[#36485C] pr-14 font-medium text-[16px] lg:block hidden">
          Open an Account
        </span>
        <Image src={user} alt="logo" />
        <Image src={menu} alt="menu" className="lg:hidden" />
        <span className="hidden lg:block">sign in</span>
      </div>
    </nav>
  );
}
