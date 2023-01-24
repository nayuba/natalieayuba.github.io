import React, { FC } from "react";
import { BodyText, H3, SecondaryText } from "./Text";

export interface ProjectProps {
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  images: JSX.Element;
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
    <div className="flex flex-col gap-2  justify-center max-w-[600px]">
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

  const figures = () => (
    <div className="flex gap-4 justify-center flex-wrap">{images}</div>
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
    <div className="flex gap-10 py-[100px] flex-wrap justify-center">
      {order === "left" ? (
        <>
          {text()}
          {figures()}
        </>
      ) : (
        <>
          {figures()}
          {text()}
        </>
      )}
    </div>
  );
};

export default Project;
