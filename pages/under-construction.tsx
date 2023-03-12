import Footer from "@/components/Footer";
import { BodyText, H1 } from "@/components/Text";

export default function UnderConstruction() {
  return (
    <div>
      <main className="px-6 md:px-10 h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 items-center max-w-2xl text-center">
          <H1
            text={
              <>
                <span className="text-4xl">Sorry!</span>
                <br />
                Website under construction
              </>
            }
            className="text-3xl"
          />
          <BodyText
            text="My website is currently undergoing some changes, please come back soon
          :)"
          />
        </div>
      </main>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Website Under Construction",
    },
  };
}
