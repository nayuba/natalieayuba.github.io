import LogoImage from "@/components/LogoImage";
import Project from "@/components/Project";
import SocialMediaNav from "@/components/SocialMediaNav";
import { BodyText, H1, H2, H3, SecondaryText } from "@/components/Text";
import Head from "next/head";
import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Natalie Ayuba</title>
        <meta name="description" content="Full-stack developer and designer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avatar.png" />
      </Head>
      <header className="bg-primary flex flex-col items-center fixed left-0 right-0 top-0 z-10 px-6 md:px-10">
        <div className="h-[80px] flex justify-between items-center w-full max-width">
          <Link href="/" className="relative h-14 w-14">
            <Image
              src="/avatar.png"
              fill
              alt="A little animated self-portrait!"
            />
          </Link>
          <Navbar />
        </div>
      </header>
      <div className="bg-gradient-to-b from-primary to-white">
        <main className="px-6 md:px-10 flex flex-col items-center">
          {/* Banner */}
          <section className="w-full flex flex-wrap lg:flex-nowrap justify-between items-center gap-10 pt-28 max-width">
            <div className="flex flex-col gap-4 lowercase md:flex-none">
              <H1 text="Hi, I'm Natalie!" />
              <H3
                text="I'm a developer and designer."
                className="font-normal"
              />
              <BodyText
                text="And I like to make things look nice on screens :)"
                className="leading-normal"
              />
            </div>
            <Image
              src="/avatar.png"
              width="500"
              height="500"
              alt="A little illustrated self-portrait!"
              className="flex-auto lg:flex-initial"
            />
          </section>

          {/* About */}
          <section
            className="flex flex-col justify-center items-center pt-28"
            id="about"
          >
            <H2 text="About Me" />
            <div className="text-justify max-w-lg">
              {[
                "Hi there! I’m Natalie, a full-stack software developer working remotely in Norwich, England. At work, I spend my time designing, coding, and testing, and try to focus my role on creating user-friendly interfaces.",
                "I consider myself a multi-disciplinarian and dabble in many different forms of creative work including graphic design, illustration, and mobile app development.",
                "Outside of work, I enjoy playing the guitar, world-building in the Sims, and watching an unhealthy amount of movie commentaries on YouTube.",
              ].map((paragraph: string) => (
                <BodyText key={paragraph} className="mb-3" text={paragraph} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="flex flex-col items-center pt-28 pb-14"
          >
            <H2 text="My Projects" />
            <Project
              title="Past app"
              categories={["App Design", "App Development", "Logo Design"]}
              description="PAST is a fatigue tracking app for users with post-stroke
              fatigue, providing a convenient method of logging your daily
              physical activity and resulting fatigue levels to be later
              shared with healthcare providers."
              technologies={["React Native", "Node.js", "Expo"]}
              images={[
                ["/past-login.png", "Past app mockup"],
                ["/past-calendar.png", "Past app mockup"],
              ]}
              order="right"
            />
            <div className="flex flex-col items-center pt-14">
              <H3 text="Logos" className="lowercase" />
              <div className="flex flex-wrap justify-center pt-14 gap-2">
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

        <footer className="px-6 text-center">
          <div id="contact" className="flex flex-col items-center pb-14 pt-28">
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
              className="bg-white font-semibold border border-black px-7 py-3 mt-10 hover:shadow-crisp duration-200 ease-linear"
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
