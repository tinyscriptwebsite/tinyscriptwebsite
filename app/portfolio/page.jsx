import Header from "@/app/components/layout/Header";
import Pages from "../components/pages";
import Footer from "@/app/components/layout/Footer";
import Image from "next/image";
import portfolio from "../assets/newfigma/portfolio/portfolio.svg";
import condo from "../assets/newfigma/portfolio/CondominiumLogo.png";
import Attendance from "../assets/newfigma/portfolio/AttendancePortalLogo.png";
import shivoham from "../assets/newfigma/portfolio/shivohamphotography.png";
import vision from "../assets/newfigma/portfolio/vison.png";
import prabhuseva from "../assets/newfigma/portfolio/Prabhusewa.png";
import Wellwalla from "../assets/newfigma/portfolio/wellwalla.png";
import bar from "../assets/newfigma/Bar.svg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  const cards = [
    {
      title: "Condominium portal",
      desc: "platform empowers corporations to post their contracts, allowing contractors to submit detailed proposals. Through our streamlined process, contracts are ...",
      image: condo,
      isLink: true,
      link: "https://condominiumportal.com/",
    },
    {
      title: "Attendance Portal",
      desc: "An Attendance Portal is a centralized platform designed to efficiently track, manage, and report attendance for organizations, educational institutions, or ",
      image: Attendance,
      isLink: false,
    },
    {
      title: "shivoham Photography",
      desc: "Shivoham Photography is a professional photography service dedicated to preserving life’s most cherished moments with artistic finesse.",
      image: shivoham,
      isLink: true,
      link: "https://shivohamphotography.com/",
    },
    {
      title: "Prabhusewa Tours & Travels",
      desc: "With years of experience in the travel industry, Prabhusewa Tours & Travels has built a reputation for delivering exceptional travel experiences...",
      image: prabhuseva,
      isLink: true,
      link: "https://travel-website-rho-livid.vercel.app/",
    },
    {
      title: "Vision Tech",
      desc: "With years of experience in the travel industry, Prabhusewa Tours & Travels has built a reputation for delivering exceptional travel experiences...",
      image: vision,
      isLink: false,
    },
    {
      title: "Wellwalla",
      desc: "With years of experience in the travel industry, Prabhusewa Tours & Travels has built a reputation for delivering exceptional travel experiences...",
      image: Wellwalla,
      isLink: true,
      link: "https://wellwalla.com/",
    },
  ];

  return (
    <Pages>
      <div className="text-white">
        <Header />
      </div>
      <div className="md:px-[10%] sm:px-[5%] px-[3%] md:pt-40 sm:pt-32 pt-28">
        {/* Hero Section */}
        <section className="flex justify-between items-center md:flex-row flex-col-reverse">
          <div className="text-center md:w-[45%] w-full">
            <h1 className="text-2xl md:text-4xl font-semibold">Portfolio</h1>
            <p className="text-lg md:mt-4 mt-2 md:text-center text-justify">
              Discover the culmination of our passion and expertise in our
              Portfolio. Dive into a showcase of our finest projects, where
              creativity meets innovation, and see firsthand how we turn ideas
              into reality. Explore our diverse range of work and get inspired
              by the solutions we've crafted for our clients.
            </p>
          </div>
          <div>
            <Image
              src={portfolio}
              alt="Web Development"
              className="w-4/5 mx-auto"
            />
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="md:py-16 py-12">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
              Explore Our Work
            </h2>
            <Image src={bar} alt="bar" />
            <p className="mt-2">
              "Discover the innovative projects that define our journey and
              impact."
            </p>
            <div className=" mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`relative bg-white hover:shadow-[0px_0px_15px_0px_rgba(16,184,219,0.2)] duration-500 p-8 pb-0 rounded-2xl flex flex-col ${
                    card.isLink ? "justify-between" : "justify-evenly"
                  }  items-center gap-4 md:min-h-[27rem]`}
                >
                  <div className="">
                    <Image
                      src={card.image}
                      className="w-4/5 mx-auto"
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                  <div
                    className={`flex flex-col items-start justify-start md:items-start text-center md:text-start gap-4`}
                  >
                    <h4 className="text-xl md:text-2xl text-secondry">
                      {card.title}
                    </h4>
                    <p>{card.desc}</p>
                  </div>
                  {card.isLink && (
                    <div>
                      <Link
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-12 rounded-full bg-secondry flex justify-center items-center ml-auto absolute right-0 bottom-0 ring-8 ring-primary"
                      >
                        <div>
                          <FaArrowRight className="text-white text-2xl" />
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Pages>
  );
};

export default page;
