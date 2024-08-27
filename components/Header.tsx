"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogOut = () => {};

  return (
    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
        `,
        className
      )}
    >
      <div
        className="
        w-full
        flex
        items-center
        mb-4
        justify-between  
      "
      >
        <div
          className="
          hidden
          md:flex
          gap-x-2
          items-center

        "
        >
          <button
            onClick={() => router.back()}
            className="
            rounded-full
            bg-black
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
          "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
            rounded-full
            bg-black
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
          "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center  ">
          <button
            className="
            flex
            bg-white
            rounded-full
            items-center
            justify-center
            hover:opacity-75
            transition
            p-2
          "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="
            flex
            bg-white
            rounded-full
            items-center
            justify-center
            hover:opacity-75
            transition
            p-2
          "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div
          className="
          flex
          justify-between
          items-center
          gap-x-2
        "
        >
          <>
            <div>
              <Button
                onClick={() => {}}
                className="
                bg-transparent
                text-neutral-300
                font-medium
              "
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {}}
                className="
                bg-white
                px-6
                py-2
              "
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
