import React, { FC } from "react";
import { BodyText, H3, SecondaryText } from "./Text";
import Image from "next/image";

export interface ProjectProps {
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  images: string[][];
  order: string;
}

const Project: FC<ProjectProps> = ({
  title,
  description,
  categories,
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
        <div key={src}>
          <Image
            src={src}
            width={images.length === 1 ? "400" : "185"}
            height="0"
            alt={alt}
          />
        </div>
      ))}
    </div>
  );

  function separateList(list: string[]) {
    let innerHTML: JSX.Element[] = [];
    for (const word of list) {
      innerHTML.push(<>{word}</>);
      if (word !== list[list.length - 1]) {
        innerHTML.push(<span className="px-2">•</span>);
      }
    }
    return <>{innerHTML}</>;
  }

  return (
    <div
      className={`${
        order === "right" ? "flex-row-reverse " : ""
      }flex gap-10 py-16 flex-wrap justify-center`}
    >
      {text()}
      {mockups()}
    </div>
  );
};

export default Project;
