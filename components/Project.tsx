import React, { FC } from "react";
import { BodyText, H3, SecondaryText } from "./Text";
import Image from "next/image";

export interface ProjectProps {
  title: string;
  categories: string[];
  description: string;
  technologies: string[];
  images: string[][];
  order: string;
}

const Project: FC<ProjectProps> = ({
  title,
  categories,
  description,
  technologies,
  images,
  order,
}) => {
  const text = () => (
    <div className="flex flex-col gap-2 justify-center max-w-lg">
      <H3 text={title} />
      <SecondaryText text={separateList(categories)} />
      <BodyText text={description} />
      <SecondaryText
        text={
          <>
            <span className="pr-2">🛠️</span>
            {separateList(technologies)}
          </>
        }
      />
    </div>
  );

  const mockups = () => (
    <div className="flex gap-4">
      {images.map(([src, alt]) => (
        <div key={src} className={`relative`}>
          <Image
            src={src}
            width={images.length === 1 ? 400 : 192}
            height={images.length === 1 ? 200 : 395}
            alt={alt}
          />
        </div>
      ))}
    </div>
  );

  function separateList(list: string[]) {
    let innerHTML: JSX.Element[] = [];
    for (let i = 0; i < list.length; i++) {
      const word = list[i];
      innerHTML.push(<span key={word}>{word}</span>);
      if (word !== list[list.length - 1]) {
        innerHTML.push(
          <span key={`dot${i}`} className="px-2">
            •
          </span>
        );
      }
    }
    return <>{innerHTML}</>;
  }

  return (
    <div
      className={`flex gap-10 py-14 flex-wrap justify-center${
        order === "right" ? " flex-row-reverse " : ""
      }`}
    >
      {text()}
      {mockups()}
    </div>
  );
};

export default Project;
