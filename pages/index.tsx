import Project from "@/components/Project";
import { BodyText, H1, H2, LinkText } from "@/components/Text";
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
        <section className="w-full flex items-center flex-wrap pt-28 gap-20 max-w-[1200px] md:min-h-screen banner-breakpoint:pt-0">
          <div className="flex flex-col gap-4 max-w-xl">
            <H1 text="Hi there, I'm Natalie!" />
            <p className="leading-[170%] text-xl">I&apos;m a <strong className="highlighted">frontend developer</strong> and <strong className="highlighted">UX designer</strong> with a love for creating user interfaces that are useful, equitable, and nice to look at.</p>
          </div>
          <div className="flex justify-center lg:justify-end grow">
            <Image
              src="/logo.svg"
              width={400}
              height={530}
              alt="A little illustrated self-portrait!"
            />
          </div>
        </section>

        {/* About */}
        <section
          className="flex flex-col justify-center items-center pt-28 md:pb-28 md:h-screen lg:justify-center"
          id="about"
        >
          <H2 text="About Me" />
          <div className="text-justify max-w-xl">
            <BodyText className="mb-3" text="Hola, my name is Natalie Ayuba! I'm a developer, designer, and all-round creative. I create with the hopes of building interfaces that help users feel valued, inspired, and represented through their everyday use of technology. I also love to write, illustrate, and make music." />
            <p className="body-text mb-3">I recently graduated with a Bachelor of Science in Computer Graphics, Imaging and Multimedia from the University of East Anglia, and have since been working remotely as a software developer at <LinkText text="We Are CORTEX" href="https://www.wearecortex.com/" /> where I focus on improving the usability and design of existing systems.</p>
            <p className="body-text">TL;DR - I&apos;m a nerd and I like making things look nice on screens :)</p>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="flex flex-col items-center pt-28 md:pb-28"
        >
          <H2 text="My Projects" />
          <Project
            className="pt-4 md:pt-14"
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
            technologies={["React Native", "Expo", "JavaScript", "Node.js", "Express", "AWS Cognito"]}
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
              text: "View case study",
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
