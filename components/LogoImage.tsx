import Image from "next/image";
import React, { FC } from "react";

const LogoImage: FC<{src: string; alt: string, bgColor: string}> = ({src, alt, bgColor}) => (
  <div className={`flex items-center justify-center w-72 h-72 ${bgColor}`}>
    <Image src={src} alt={alt} width="200" height="0"/>
  </div>
);

export default LogoImage;
