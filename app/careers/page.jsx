"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import bar from "../assets/newfigma/Bar.svg";
import layerBlur from "../assets/newfigma/Layer Blur Rectangle.svg";
import minusRound from "../assets/newfigma/Career/Minus.svg";
import creermap from "../assets/newfigma/Career/how to apply image.svg";
import careersImage from "../assets/newfigma/Career/Career Image.svg";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Pages from "../components/pages";
import Cookies from "universal-cookie";
import Dropdown from "../UI/element/Dropdown";
import ApplicationModal from "../UI/PopUps/ApplicationModal";
import AddAndEditJobModal from "../UI/PopUps/AddAndEditJobModal";
import { useLoader } from "../context/Load";
import { useRouter } from "next/navigation";

function Page() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [modals, setModals] = useState({
    applicationModalOpen: { visible: false, data: null },
    addJobModalOpen: { visible: false },
    editJobModalOpen: { visible: false, data: null },
  });
  const { showLoader, hideLoader } = useLoader();
  const [jobs, setjobs] = useState([]);
  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const token = cookies.get("token");
    const access = cookies.get("access");
    if (token && access === "admin") {
      setIsAdmin(true);
    }
  }, []);

  const toggleModal = (modalType, isOpen, data = null) => {
    setModals((prev) => ({
      ...prev,
      [modalType]: { visible: isOpen, data },
    }));
  };

  const renderModel = () => {
    if (modals.applicationModalOpen.visible) {
      return (
        <ApplicationModal
          job={modals.applicationModalOpen.data}
          closeModal={() => toggleModal("applicationModalOpen", false)}
        />
      );
    } else if (modals.addJobModalOpen.visible) {
      return (
        <AddAndEditJobModal
          fetchJobs={fetchJobs}
          closeModal={() => toggleModal("addJobModalOpen", false)}
        />
      );
    } else if (modals.editJobModalOpen.visible) {
      return (
        <AddAndEditJobModal
          isEdit={true}
          fetchJobs={fetchJobs}
          job={modals.editJobModalOpen.data}
          closeModal={() => toggleModal("editJobModalOpen", false)}
        />
      );
    } else {
      return null;
    }
  };

  const fetchJobs = async () => {
    showLoader();
    try {
      const { data } = await axios.get("/api/career");
      setjobs(data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleLogout = () => {
    cookies.remove("token");
    cookies.remove("access");
    router.push("/");
  };

  const handleDelete = async (id) => {
    try {
      showLoader();
      const { data } = await axios.delete(`api/career`, { params: { id } });
      if (data.success) {
        toast.success("Job deleted successfully!");
        fetchJobs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader();
    }
  };

  return (
    <Pages>
      <div className="text-white">
        <Header />
      </div>
      <div className="md:px-[10%] sm:px-[5%] px-[3%] md:pt-40 pt-32">
        {isAdmin && (
          <div className="flex justify-end fixed -right-32 -top-12 z-10 md:px-[10%] sm:px-[5%] px-[3%] md:pt-40 pt-32">
            {isAdmin && (
              <div className="">
                <Dropdown
                  options={[
                    {
                      title: "Add Job",
                      click: () => toggleModal("addJobModalOpen", true),
                    },
                    {
                      title: "Logout",
                      click: () => handleLogout(),
                    },
                  ]}
                />
              </div>
            )}
          </div>
        )}

        {/* Hero Section */}
        <section className="flex justify-between items-center md:flex-row flex-col-reverse">
          <div>
            <Image src={careersImage} alt="careers" />
          </div>
          <div className="text-center md:w-[45%] w-full">
            <h1 className="text-2xl md:text-4xl font-semibold ">Career</h1>
            <p className="md:text-2xl text-xl text-center md:mt-6 mt-4 font-medium text-secondry">
              Start Your Career With Tiny Script
            </p>
            <p className="text-lg md:mt-4 mt-2 md:text-center text-justify">
              Join our dynamic team at Tiny Script Soft Tech and ignite your
              career journey! We offer exciting opportunities for growth,
              collaboration, and innovation in a supportive and inclusive
              environment. Whether you’re a seasoned professional or just
              starting out, Tiny Script Soft Tech provides the perfect platform
              for you to thrive and make a meaningful impact. Explore our
              openings today and take the next step towards fulfilling your
              career aspirations!
            </p>
          </div>
        </section>

        {/* Job Openings Section */}
        {jobs && jobs.length > 0 && (
          <section className="md:py-16 py-12">
            <div className="container mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
                Current Openings
              </h2>
              <Image src={bar} alt="bar" />
              <p className="mt-2">
                "Explore our current openings and take the next step in your
                career with us!"
              </p>
              <div className="space-y-4 mt-12">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded flex justify-between items-center md:flex-row flex-col gap-4"
                  >
                    <div className="flex items-center md:gap-12 gap-2 text-center md:text-start  md:flex-row flex-col">
                      <div>
                        <Image src={minusRound} alt="minusRound" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-3xl text-secondry">
                          {job.title}
                        </h4>
                        <p className="mt-2">Experience: {job.experience}</p>
                        <p className="mt-1">Location: {job.location}</p>
                      </div>
                    </div>
                    {isAdmin && (
                      <div className="flex gap-4">
                        <button
                          className="relative  border-secondry border text-secondry hover:bg-secondry hover:text-white duration-500 backdrop-blur-custom md:px-10 px-6 py-2 rounded-full font-bold"
                          onClick={() =>
                            toggleModal("editJobModalOpen", true, job)
                          }
                        >
                          Edit
                          <Image
                            src={layerBlur}
                            alt="layerBlur"
                            className="absolute right-0 top-0"
                          />
                        </button>
                        <button
                          className="relative  border-secondry border text-secondry hover:bg-secondry hover:text-white duration-500 backdrop-blur-custom md:px-10 px-6 py-2 rounded-full font-bold"
                          onClick={() => handleDelete(job._id)}
                        >
                          Delete
                          <Image
                            src={layerBlur}
                            alt="layerBlur"
                            className="absolute right-0 top-0"
                          />
                        </button>
                      </div>
                    )}
                    {!isAdmin && (
                      <button
                        className="relative border-secondry border text-secondry hover:bg-secondry hover:text-white duration-500 backdrop-blur-custom md:px-10 px-6 py-2 rounded-full font-bold"
                        onClick={() =>
                          toggleModal("applicationModalOpen", true, job)
                        }
                      >
                        Apply
                        <Image
                          src={layerBlur}
                          alt="layerBlur"
                          className="absolute right-0 top-0"
                        />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How To Apply Section */}
        <section className="md:py-16 py-12">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
              How To Apply
            </h2>
            <Image src={bar} alt="bar" />
            <p className="mt-2">
              "Learn how to apply and start your journey with us today!"
            </p>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
              <Image src={creermap} alt="Career map" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {/* Render Modal */}
      {renderModel()}
    </Pages>
  );
}

export default Page;
