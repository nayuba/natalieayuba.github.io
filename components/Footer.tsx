import { appendClassName } from "@/utils/classNameUtils";
import { FC } from "react";
import Button from "./Button";
import SocialMediaNav from "./SocialMediaNav";
import { H2, BodyText, SecondaryText } from "./Text";

export interface FooterProps {
  includeContact?: boolean;
  className?: string;
}

const Footer: FC<FooterProps> = ({ includeContact = false, className}) => (
  <footer className={"px-6 text-center" + appendClassName(className)}>
    {includeContact && (
      <div id="contact" className="flex flex-col items-center py-28">
        <H2 text="Get In Touch" />
        <BodyText
          text={
            <>
              I occasionally take on freelance opportunities.
              <br />
              Feel free to send me a message - my inbox is always open!
            </>
          }
        />
        <Button
          text="Say hi"
          href="mailto:natalieayuba@hotmail.com"
          className="mt-10"
        />
      </div>
    )}
    <div className="flex flex-col items-center gap-5 py-10 mt-14">
      <SocialMediaNav includeTooltips />
      <SecondaryText text="Designed and Developed by Natalie Ayuba" />
    </div>
  </footer>
);

export default Footer;
