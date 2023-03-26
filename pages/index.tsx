import Project from "@/components/Project";
import { BodyText, H1, H2, H3, LinkText } from "@/components/Text";
import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-6 md:px-10 flex flex-col items-center">
        {/* Banner */}
        <section className="w-full flex flex-wrap justify-between items-center gap-10 pt-28 max-w-[1400px] lg:flex-nowrap lg:h-screen lg:items-center lg:pt-0">
          <div className="flex flex-col gap-4 lowercase md:flex-none">
            <H1 text="Hi, I'm Natalie!" />
            <H3
              text="I'm a developer and designer"
              className="font-normal md:text-5xl"
            />
            <BodyText
              text="And I like to make things look nice on screens :)"
              className="text-lg"
            />
          </div>
          <Image
            src="/logo-square.svg"
            width={500}
            height={500}
            alt="A little illustrated self-portrait!"
            className="flex-auto lg:flex-initial"
          />
        </section>

        {/* About */}
        <section
          className="flex flex-col justify-center items-center pt-28 md:pb-28 lg:h-screen lg:justify-center"
          id="about"
        >
          <H2 text="About Me" />
          <div className="relative text-justify max-w-lg">
            <div className="hidden xl:block absolute -top-10 -left-[70%] rotate-6">
              <Image
                src="/computer.svg"
                width="242"
                height="162"
                alt="A little illustrated computer!"
              />
            </div>
            <div className="hidden xl:block absolute -bottom-10 -left-[40%] -rotate-6">
              <Image
                src="/sims.svg"
                width="41"
                height="100"
                alt="A little illustrated sims diamond!"
              />
            </div>
            <div className="hidden xl:block absolute -top-10 -right-[45%] -rotate-6">
              <Image
                src="/yt.svg"
                width="77"
                height="39"
                alt="A little illustrated YouTube logo!"
              />
            </div>
            <div className="hidden xl:block absolute -bottom-10 -right-[45%] -rotate-6">
              <Image
                src="/guitar.svg"
                width="153"
                height="184"
                alt="A little illustrated guitar!"
              />
            </div>
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
          className="flex flex-col items-center pt-28 md:pb-28"
        >
          <H2 text="My Projects" />
          <Project
            title="PAST app"
            categories={["App Design", "App Development", "Logo Design"]}
            description={
              <>
                PAST is a fatigue tracking app for users with post-stroke
                fatigue, providing a convenient method to log daily physical
                activity and resulting fatigue levels using{" "}
                <LinkText
                  href="https://www.researchgate.net/publication/256293990_Graded_Exercise_Therapy_A_self-help_guide_for_those_with_chronic_fatigue_syndromemyalgic_encephalomyelitis"
                  text="guided graded exercise therapy"
                  external
                />
                .
              </>
            }
            technologies={["React Native", "Node.js", "Expo"]}
            images={[
              {
                src: "/past-login.png",
                alt: "Past app mockup",
                width: 461,
                height: 930,
              },
              {
                src: "/past-calendar.png",
                alt: "Past app mockup",
                width: 461,
                height: 930,
              },
            ]}
            order="right"
            link={{
              text: "Learn more",
              href: "https://docs.google.com/presentation/d/1hIhJQrXa5Qd5Lhggceuda70YpJB00HhdpQeEzL4tc2w/edit?usp=sharing",
            }}
          />
        </section>
      </main>
      <ScrollToTopButton />
      <Footer includeContact />
    </>
  );
}
