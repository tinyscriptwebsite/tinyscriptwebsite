import Header from "../components/layout/Header";
import Image from "next/image";
import about from "../assets/newfigma/About Us Image.svg";
import innovationStretegiesIcon from "../assets/newfigma/Innovative Strategies.svg";
import insightStretegiesIcon from "../assets/newfigma/Insights Strategies.svg";
import personalizeTecticsIcon from "../assets/newfigma/Personalized Tactics.svg";
import orgaizedcultureIcon from "../assets/newfigma/Organization Culture Image.svg";
import rectangle from "../assets/newfigma/Rectangle 46.svg";
import rectangleSlant from "../assets/newfigma/Rectangle 47.svg";
import rectangleSlant1 from "../assets/newfigma/Rectangle 47 (1).svg";
import microsolutionsIcon from "../assets/newfigma/MicroSolution icon.svg";
import simplicityIcon from "../assets/newfigma/Simplicity icon.svg";

function About() {
  return (
    <div>
      <Header />
      <div className="md:px-[10%] sm:px-[5%] px-[3%]">
        <div className="min-h-screen grid place-items-center  mb-[2rem] gap-6 ">
          <section className="flex mt-10 justify-between items-center md:flex-row flex-col-reverse">
            <div className="text-center md:w-[45%] md:ml-[5rem] flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-4xl font-semibold ">About Us</h1>
              <p className="md:text-2xl text-xl text-center md:mt-6 mt-4 font-medium text-secondry">
                We are the decisive factor behind your success
              </p>
              <p className="text-[18px] leading-[2rem] md:mt-4 mt-2 md:text-center text-justify">
                We believe in building strong relationships with our clients,
                based on trust, transparency, and open communication. We work
                closely with our clients to understand their business needs and
                goals, and we collaborate with them throughout the project to
                ensure that the final solution meets their expectations. Our
                team consists of highly skilled professionals with years of
                experience in their respective fields. We continuously invest in
                the training and development of our employees to ensure that
                they stay up-to-date with the latest technologies and industry
                trends.
              </p>
            </div>
            <div className="w-full md:w-[50%] mt-10 flex items-center justify-center">
              <Image src={about} alt="about" className="" />
            </div>
          </section>
        </div>
        <div className="min-h-[80vh] mt-10 mb-[6rem]">
          <div className="flex justify-center items-center md:flex-row flex-col gap-8">
            <Image
              src={innovationStretegiesIcon}
              alt="Decorative Vector Icon"
              className="rounded-lg md:w-full w-3/5"
            />
            <Image
              src={insightStretegiesIcon}
              alt="Decorative Vector Icon"
              className="rounded-lg md:w-full w-3/5"
            />
            <Image
              src={personalizeTecticsIcon}
              alt="Decorative Vector Icon"
              className="rounded-lg md:w-full w-3/5"
            />
          </div>
        </div>
        <div className="min-h-[80vh] grid place-items-center">
          <section className="flex justify-between items-center md:flex-row flex-col-reverse">
            <div className="flex md:gap-8 gap-20 md:flex-row flex-col md:mt-0 mt-12">
              <div className="relative md:ml-[2rem] w-full group flex flex-col items-center justify-center text-center">
                <Image
                  src={rectangle}
                  alt="Rectangle"
                  className="md:w-full w-[20rem]"
                />
                <Image
                  src={rectangleSlant}
                  alt="Rectangle Slant"
                  className="absolute md:w-full w-[20rem]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <Image
                  src={microsolutionsIcon}
                  alt="microsolutions"
                  className="absolute size-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    top: "10%",
                    right: "10%",
                    transform: "translateY(-50%)",
                  }}
                />
                <div
                  className="absolute w-[75%] transition-transform duration-300"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h1 className="text-secondry text-2xl font-bold group-hover:translate-y-6 transition-transform duration-300">
                    Microsolutions
                  </h1>
                  <p className="text-black mt-2 text-[18px] leading-[2rem] text-center text-sm group-hover:translate-y-6 transition-transform duration-300">
                    Crafting intricate IT solutions tailored to your unique
                    needs at Tiny Script Soft Tech
                  </p>
                </div>
              </div>
              <div className="relative group w-full flex md:mr-[2rem] flex-col items-center justify-center text-center">
                <Image
                  src={rectangle}
                  alt="Rectangle"
                  className="md:w-full w-[20rem]"
                />
                <Image
                  src={rectangleSlant1}
                  alt="Rectangle Slant"
                  className="absolute md:w-full w-[20rem]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <Image
                  src={simplicityIcon}
                  alt="microsolutions"
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    top: "10%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <div
                  className="absolute w-[70%] transition-transform duration-300"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h1 className="text-secondry text-2xl font-bold group-hover:translate-y-6 transition-transform duration-300">
                    Simplicity
                  </h1>
                  <p className="text-black text-center text-[18px] leading-[2rem] mt-2 text-sm group-hover:translate-y-6 transition-transform duration-300">
                    Streamlined Solutions for Complex Challenges Effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[45%] mt-10 flex md:mr-[4rem] flex-col items-center justify-center">
              <h2 className="text-xl md:text-4xl font-semibold">Features</h2>
              <p className="md:text-2xl text-xl text-center md:mt-6 mt-4 font-medium text-secondry">
                Introducing 'NexGen': Our Next-Level It Solution for Tomorrow's
                Challenges
              </p>
              <p className="text-[18px] leading-[2rem] md:mt-4 mt-2 md:text-center text-center">
                Empower your future with 'Tiny Script Soft Tech' – where
                innovation meets unparalleled IT solutions for the challenges
                ahead.
              </p>
            </div>
          </section>
        </div>
        <section className="flex min-h-[80vh] justify-between items-center md:flex-row flex-col md:mt-0 mt-20">
          <div className="text-center md:w-[45%] md:ml-[5rem] flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-semibold ">
              Organization Culture
            </h1>
            <p className="text-[18px] md:mt-4 mt-2 leading-[2rem] md:text-center text-justify">
              At our core, TinyScript fosters a vibrant and inclusive
              organizational culture that values collaboration, creativity, and
              continuous learning. We believe in cultivating an environment
              where every individual's voice is heard, respected, and empowered.
              From our open-door policy to our team-building activities, we
              prioritize transparency, trust, and mutual respect. Our culture
              encourages innovation and embraces diversity, recognizing that
              unique perspectives drive our collective success. At TinyScript,
              we're not just colleagues; we're a supportive community dedicated
              to achieving excellence together.
            </p>
          </div>
          <div className="w-full md:w-[50%] mt-10 flex items-center justify-center">
            <Image
              src={orgaizedcultureIcon}
              alt="about"
              width={400}
              height={180}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
