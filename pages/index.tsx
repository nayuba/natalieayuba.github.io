import LogoImage from "@/components/LogoImage";
import Project from "@/components/Project";
import { Icon } from "@/components/Icon";
import SocialMediaNav from "@/components/SocialMediaNav";
import {
  LinkText,
  BodyText,
  H1,
  H2,
  H3,
  SecondaryText,
} from "@/components/Text";
import Head from "next/head";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Natalie Ayuba</title>
        <meta name="description" content="Full-stack developer and designer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avatar.png" />
      </Head>
      <header className="bg-primary flex flex-col items-center fixed top-0 left-0 right-0 z-[1] drop">
        <div className="max-w-[1400px] h-[80px] flex justify-between items-center px-10 w-screen">
          <SocialMediaNav />
          <a href="#" className="absolute left-[50%] translate-x-[-50%]">
            <Image
              src="/avatar.png"
              width="50"
              height="50"
              alt="A little animated self-portrait!"
            />
          </a>
          <Nav />
        </div>
      </header>
      <div className="bg-gradient-to-b from-primary to-white">
        <main className="px-10 flex flex-col items-center">

          {/* Banner */}
          <section className="w-full max-w-[1400px] min-h-screen flex flex-wrap justify-between items-center gap-4 py-[100px] relative">
            <div className="flex flex-col gap-4 lowercase">
              <H1 text="Hi, I'm Natalie!" />
              <H3
                text="I'm a developer and designer."
                className="font-normal"
              />
              <BodyText text="And I like to make things look nice on screens :)" />
            </div>
            <Image
              src="/avatar.png"
              width="500"
              height="500"
              alt="A little illustrated self-portrait!"
            />
            <Icon
              href="#about"
              className="absolute bottom-8 text-2xl left-[50%] translate-x-[-50%]"
              icon={<FaChevronDown />}
            />
          </section>

          {/* About */}
          <section
            className="h-screen flex flex-col justify-center items-center gap-6 py-[100px]"
            id="about"
          >
            <H2 text="About Me" />
            <div className="text-justify max-w-[600px]">
              {[
                "Hi there! I’m Natalie, a full-stack software developer working remotely in Norwich, England. At work, I spend my time designing, coding, and testing, and try to focus my role on creating user-friendly interfaces.",
                "I consider myself a multi-disciplinarian and dabble in many different forms of creative work including graphic design, illustration, and mobile app development.",
                <>
                  Outside of work, I enjoy playing the guitar (check out my
                  band&nbsp;
                  <LinkText
                    text="Lamona"
                    href="https://www.instagram.com/theylamona/"
                    external
                  />
                  ), world-building in the Sims, and watching an unhealthy
                  amount of movie commentaries on YouTube.
                </>,
              ].map((paragraph: any) => (
                <BodyText key={paragraph} className="mb-3" text={paragraph} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="flex flex-col items-center py-[100px] gap-6"
          >
            <H2 text="Some Projects I've Worked On" />
            <Project
              title="Past app"
              categories={["App Design", "App Development", "Logo Design"]}
              description="PAST is a fatigue tracking app for users with post-stroke
              fatigue, providing a convenient method of logging your daily
              physical activity and resulting fatigue levels to be later
              shared with healthcare providers."
              technologies={["React Native", "Node.js", "Expo"]}
              images={
                <>
                  {["/past-login.png", "/past-calendar.png"].map((src) => (
                    <Image
                      key={src}
                      src={src}
                      width="260"
                      height="0"
                      alt="Past app mockup"
                    />
                  ))}
                </>
              }
              order="right"
            />
            <div className="flex flex-col items-center py-[100px]">
              <H3 text="Logos" className="lowercase" />
              <div className="flex flex-wrap justify-center pt-[100px] gap-2">
                {[
                  [
                    "Stripped Sets Logo",
                    "/stripped-sets-logo.png",
                    "bg-stripped-sets-purple",
                  ],
                  [
                    "What You Sayin' UEA? Logo",
                    "/what-you-sayin-uea-logo.png",
                    "bg-white",
                  ],
                  [
                    "UEA Natural Hair Society Logo",
                    "/uea-natural-hair-society-logo.png",
                    "bg-natural-hair-soc-blue",
                  ],
                  ["PAST Logo", "/past-logo.png", "bg-white"],
                ].map(([alt, src, bgColor]) => (
                  <LogoImage key={src} alt={alt} src={src} bgColor={bgColor} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="px-10 text-center">
          <div
            id="contact"
            className="flex flex-col items-center gap-6 py-[100px]"
          >
            <H2 text="Get In Touch" />
            <BodyText
              text={
                <>
                  I occasionally do freelance work.
                  <br />
                  Feel free to send me a message - my inbox is always open!
                </>
              }
            />
            <a
              href="mailto:natalieayuba@hotmail.com"
              className="bg-white font-semibold border border-black px-7 py-3 mt-2 hover:shadow-crisp duration-500"
            >
              Say hi
            </a>
          </div>
          <div className="flex flex-col items-center gap-5 py-10 mt-10">
            <SocialMediaNav includeTooltips />
            <SecondaryText text="Designed and Developed by Natalie Ayuba" />
          </div>
        </footer>
        <ScrollToTopButton />
      </div>
    </>
  );
}
