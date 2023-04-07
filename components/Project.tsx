import React, { FC } from "react";
import { BodyText, H3, SecondaryText } from "./Text";
import Image from "next/image";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { appendClassName } from "@/utils/classNameUtils";

export interface ProjectProps {
  title: string;
  categories: string[];
  description: string | JSX.Element;
  technologies: string[];
  images: { src: string; alt: string; width: number; height: number }[];
  order: string;
  link?: { text: string; href: string };
  githubLink?: string;
  className?: string;
}

const Project: FC<ProjectProps> = ({
  title,
  categories,
  description,
  technologies,
  images,
  order,
  link,
  githubLink,
  className,
}) => {
  const text = () => (
    <div className="flex flex-col gap-2 justify-center max-w-lg">
      <H3 text={title} />
      <SecondaryText text={separateList(categories)} />
      <BodyText text={description} />
      <SecondaryText text={separateList(technologies)} />
      <div className="flex items-center gap-4 mt-4">
        {link && <Button text={link.text} href={link.href} external />}
        {githubLink && (
          <Button
            text="View on Github"
            href={githubLink}
            external
            iconRight={<FaGithub />}
          />
        )}
      </div>
    </div>
  );

  const mockups = () => (
    <div className="flex gap-4 max-w-lg">
      {images.map((image: any) => (
        <div key={image.src}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
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
      className={
        "flex gap-10 pt-14 md:pb-14 flex-wrap justify-center" +
        appendClassName(className) +
        (order === "right" ? " flex-row-reverse" : "")
      }
    >
      {text()}
      {mockups()}
    </div>
  );
};

export default Project;
