import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";
import { FC } from "react";
import { appendClassName } from "@/utils/classNameUtils";

const Header: FC<{className?: string}> = ({className}) => (
  <header className={"bg-primary flex flex-col items-center fixed left-0 right-0 top-0 z-10 px-6 md:px-10" + appendClassName(className)}>
    <div className="h-[80px] flex justify-between items-center w-full max-width">
      <Link href="/" className="w-9 flex">
        <Image
          src="/logo.svg"
          width={57}
          height={77}
          alt="A little self-portrait!"
        />
      </Link>
      <Navbar />
    </div>
  </header>
);

export default Header;
