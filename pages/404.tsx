import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { H1 } from "@/components/Text";
import Head from "next/head";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Natalie Ayuba • 404 Page Not Found</title>
      </Head>
      <Header />
      <div className="h-screen pt-[80px] flex flex-col items-center justify-center">
          <div className="px-6 md:px-10 h-screen flex flex-col items-center justify-center text-center">
            <H1
              text={
                <>
                  <span className="text-6xl block mb-2">Ooops...</span>
                  That page doesn&apos;t exist
                </>
              }
              className="text-3xl"
            />
            <Button text="Go home" href="/" className="mt-12" />
          </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
